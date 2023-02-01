<script lang="ts">
	import { beforeinstallprompt } from '$lib/pwa.store';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';

	function runInstallEvent() {
		const deferredPrompt: any = get(beforeinstallprompt);
		deferredPrompt.prompt();

		deferredPrompt.userChoice.then(async (userChoice: { outcome: string; platform: string }) => {
			console.log('userChoice', userChoice);
			const url = userChoice.outcome === 'accepted' ? '/app/splash' : '/app/install';
			goto(url);
		});
	}
</script>

<h1>Install page</h1>

This page should run all code needed to install the PWA on the homescreen. This involves a.o.:

<ul>
	<li>checking for browser compatability</li>
	<li>android or iOS install</li>
	<li>monitor for beforeinstallprompt event (if applicable)</li>
	<li>keeping user busy while waiting for it</li>
	<li>show relevant UI for installation</li>
	<li>telling the user what to do once installed</li>
</ul>

<br /><br />
A magic button will appear here if the browser supports beforeinstallprompt.
<br />
{#if $beforeinstallprompt !== undefined}
	<ion-button on:keypress={runInstallEvent} on:click={runInstallEvent}
		>You can install via button!</ion-button
	>
{:else}
	<ion-spinner />
{/if}
<br />
If not, then manually go to splash. <a href="/app/splash">Go to splash page</a>
