import { writable } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const beforeinstallprompt = writable<any>(undefined);
export const appinstalled = writable<boolean>(false);

// does not get fired once the app is installed, even after reload
// but event handler does get attached even if the app is already installed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const beforeinstallpromptHandler = (e: any) => {
    e.preventDefault();
    beforeinstallprompt.set(e);
    appinstalled.set(false);
    console.log(`'beforeinstallpromptHandler' event was fired.`, e);
};

// 'appinstalled' is only triggered right after the installation of the app
// it does not get fired if the app is already installed and reloaded
// so using this attachment may not really make sense
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appinstalledHandler = (e: any) => {
    appinstalled.set(true);
    window.removeEventListener('beforeinstallprompt', beforeinstallpromptHandler);
    console.log(`'appinstalledHandler' event was fired.`, e);
}

export const listenForBeforeInstallPrompt = () => {
    if (window) {
        window.addEventListener('beforeinstallprompt', beforeinstallpromptHandler);
        window.addEventListener('appinstalled', appinstalledHandler);
        console.log(`'beforeinstallprompt' listeners attached.`)
    } else console.warn('Cannot run listenForBeforeInstallPrompt in SSR mode');
}
