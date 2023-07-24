import { CapacitorConfig } from '@capacitor/cli';

const livereload = process.argv.includes('-hmr');
const appId = 'io.ionic.kitssrdemo';
const appName = 'ionic-sveltekit-ssr-demo';
const server = (livereload) ? {
    'url': '192.168.153.1:5173',
    'cleartext': true
  } : { 
    androidScheme: 'https'
  };
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (livereload) console.log('WARNING: running capacitor with livereload config', config);

export default config;
