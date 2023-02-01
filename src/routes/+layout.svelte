<script lang="ts">
	import '../app.postcss';
	import './styles.css';

	// we do implicit registration of service worker using the Readable API in pwa.store.ts
	// import { listenForBeforeInstallPrompt, needRefresh, updateServiceWorker } from '$lib/pwa.store';
	// import { onMount } from 'svelte';
	// if ($needRefresh)
	// 	// aggressive update of app
	// 	setTimeout(() => {
	// 		updateServiceWorker(true);
	// 	}, 4000);

	// onMount(() => {
	// 	listenForBeforeInstallPrompt();
	// });

	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`);
				},
				onRegisterError(error) {
					console.log('SW registration error', error);
				}
			});
		}
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>
<slot />
