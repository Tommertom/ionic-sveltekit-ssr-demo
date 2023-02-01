
const pwaManifest = {
    name: "Ionic SSR demo",
    short_name: "IonicSSRDemo",
    description: "Ionic SSR demo",
    theme_color: '#f27649',
    orientation: "portrait",
    icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
        }
    ]
}

const pwaConfiguration = {
    srcDir: './build',
    outDir: './build', // to ensure sw.js and workbox are in build - not according to docs, but works nevertheless? 
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'dist/*'],
    base: '/',
    scope: '/',
    manifest: pwaManifest
}

export { pwaConfiguration }
