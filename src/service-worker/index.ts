import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

const precache_list = [
  ...build,
  ...files,
  ...prerendered
].map(s => ({
  url: s,
  revision: version
}));

precacheAndRoute(precache_list);

// we add this service worker because we removed the registering of Vite PWA service worker
// this one is registered by SvelteKir by default and we have it to precache our app, which is the point of having a PWA