<script lang="ts">
	import '../app.postcss';
	import './styles.css';

	// we do implicit registration of service worker using the Readable API in pwa.store.ts
	import { needRefresh, updateServiceWorker } from '$lib/pwa.store';
	if ($needRefresh)
		// aggressive update of app
		setTimeout(() => {
			updateServiceWorker(true);
		}, 4000);
</script>

<svelte:head />
<slot />
