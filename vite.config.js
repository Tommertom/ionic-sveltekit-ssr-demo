import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { VitePWA } from 'vite-plugin-pwa';
import mkcert from 'vite-plugin-mkcert';


const pwaManifest = {
	name: "Ionic SSR demo",
	short_name: "IonicSSRDemo",
	description: "Ionic SSR demo",
	theme_color: '#f27649',
	orientation: "portrait",
	start_url: "/app/splash",
	icons: [
		// The original 192x192 icon size was actually 512x512
		{
			src: "/android-chrome-192x192.png",
			sizes: "192x192",
			type: "image/png",
			// Chrome DevTools recommends not using it
			// "purpose": "maskable any"
		},
		{
			sizes: "512x512",
			src: "/android-chrome-512x512.png",
			type: "image/png"
		}
	]
}

const pwaConfiguration = {
	// None of this is required and builds are being executed just fine
	// If "ouDir" is set vite is actually "dumping" generated files there
	// that's why sw.js and so one were there
	// outDir: './static',
	// includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'dist/*'],
	base: '/',
	scope: '/',
	manifest: pwaManifest
}

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		// we need it for 'workbox-precaching'
		'process.env.NODE_ENV': '"production"'
	},
	plugins: [
		sveltekit(),
		// a plugin for enabling provisional certificate for https preview server
		mkcert(),
		// VitePWA(pwaConfiguration)
		SvelteKitPWA(pwaConfiguration)
	],
	// for service worker to work properly the PWA needs to be running on https protocol
	preview: {
		https: true
	},
	server: {
		https: true
	}
};

export default config;
