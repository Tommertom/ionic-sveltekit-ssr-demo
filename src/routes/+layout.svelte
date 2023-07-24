<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import { listenForBeforeInstallPrompt } from '$lib/pwa.store';
	import { onMount } from 'svelte';
	import { pwaInfo } from "virtual:pwa-info";

	// we do implicit registration of service worker using the Readable API in pwa.store.ts

	// this cannot work as here we have SSR and on 'server' no 'navigator' object is existing
	// that is the reason why we got 'ReferenceError: navigator is not defined' error (point 2 from the list)
	/* import { needRefresh, updateServiceWorker } from '$lib/pwa.store';
	if ($needRefresh)
		// aggressive update of app
		setTimeout(() => {
			updateServiceWorker(true);
		}, 4000); */
	
	// after some thought I came to a conclusion that it doesn't make much sense to attach event listener in service worker
	// the other reason is that it wasn't really consistant and occasionally the 'beforeinstallprompt' listener wasn't getting triggered
	// that's why I am attaching the 'beforeinstallprompt' listeners in onMount() method so we make sure that the listeners are always attached on all pages
	// if app gets installed, these listeners get removed
	onMount(() => {
		console.log(`Attaching 'beforeinstallprompt' listeners.`);
		listenForBeforeInstallPrompt();
	});

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<slot />

{#await import('$lib/ReloadPrompt.svelte') then {default: ReloadPrompt}}
  <ReloadPrompt />
{/await}
