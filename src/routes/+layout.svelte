<script lang="ts">
	import '../app.postcss';
	import './styles.css';

	// we do implicit registration of service worker using the Readable API in pwa.store.ts
	import { listenForBeforeInstallPrompt, needRefresh, updateServiceWorker } from '$lib/pwa.store';
	import { onMount } from 'svelte';
	if ($needRefresh)
		// aggressive update of app
		setTimeout(() => {
			updateServiceWorker(true);
		}, 4000);

	onMount(() => {
		listenForBeforeInstallPrompt();
	});
</script>

<slot />
