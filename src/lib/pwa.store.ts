import { useRegisterSW } from 'virtual:pwa-register/svelte';
import { writable } from 'svelte/store';

export const beforeinstallprompt = writable(undefined)
export const appinstalled = writable<boolean | undefined>(undefined);

export const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(swr) {
        console.log(`SW registered : ${swr}`);
    },
    onRegisterError(error) {
        console.log('SW registration error', error);
    }
});

const beforeinstallpromptHandler = (e: any) => {
    e.preventDefault();
    beforeinstallprompt.set(e);
    appinstalled.set(false);
    console.log(`'beforeinstallpromptHandler' event was fired.`, e);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appinstalledHandler = (e: any) => {
    appinstalled.set(true);
    window.removeEventListener('beforeinstallprompt', beforeinstallpromptHandler);
    console.log(`'appinstalledHandler' event was fired.`, e);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (getInstalledRelatedApps in navigator) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigator.getInstalledRelatedApps().then((relatedApps: any) => {
            console.log('Installed apps', relatedApps)
        })
    }

}

window.addEventListener('beforeinstallprompt', beforeinstallpromptHandler);
window.addEventListener('appinstalled', appinstalledHandler);

