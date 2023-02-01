<script lang="ts">
	import { goto } from '$app/navigation';
	import Landing from '$lib/components/Landingpage/Landing.svelte';
	import { onMount } from 'svelte';
	import { Capacitor } from '@capacitor/core';

	const isPWA = (win: Window): boolean =>
		!!(win.matchMedia?.('(display-mode: standalone)').matches || (win.navigator as any).standalone);

	let showLanding = false;
	onMount(() => {
		console.log('Are we native?', Capacitor.isNativePlatform());
		if (Capacitor.isNativePlatform()) {
			goto('/app/login');
			return;
		}

		if (isPWA(window)) goto('/app/splash');
		else showLanding = !isPWA(window);
	});
</script>

{#if showLanding}
	<Landing />
{/if}
