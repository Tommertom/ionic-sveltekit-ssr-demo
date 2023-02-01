import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { pwaConfiguration } from './pwa-configuration';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),
	SvelteKitPWA(pwaConfiguration)]
};

export default config;
