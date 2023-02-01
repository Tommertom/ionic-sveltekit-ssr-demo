<script lang="ts">
	import { scale } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { is } from 'ionic-svelte';

	// just to be sure we do this in onMount
	onMount(() => {
		if (is('capacitor') && !is('pwa')) goto('/app/login');
		else
			setTimeout(() => {
				goto('/app/login');
			}, 4000);
	});
</script>

<ion-content>
	<br />
	<br />
	<br />
	<br />
	<h1 in:scale={{ duration: 1900, easing: elasticInOut }}>LOGO</h1>
	<br />
	<br />
	<div class="center" in:scale={{ delay: 400, duration: 1900, easing: elasticInOut }}>
		Sell more! Achieve more!
	</div>
</ion-content>

<style>
	.center {
		text-align: center;
		font-size: 140%;
	}
</style>
