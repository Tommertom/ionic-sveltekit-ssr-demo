<script lang="ts">
	import { goto } from '$app/navigation';
	import Landing from '$lib/components/Landingpage/Landing.svelte';
	import { onMount } from 'svelte';

	const isPWA = (win: Window): boolean =>
		!!(win.matchMedia?.('(display-mode: standalone)').matches || (win.navigator as any).standalone);

	let showLanding = false;
	onMount(() => {
		if (isPWA(window)) goto('/app/splash');
		else showLanding = !isPWA(window);
	});
</script>

{#if showLanding}
	<Landing />
{/if}
