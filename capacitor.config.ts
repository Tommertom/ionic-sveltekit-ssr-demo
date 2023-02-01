
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'kitssrdemo.ionic.io';
const appName = 'ionic-sveltekit-ssr-demo';
const server = process.argv.includes('-hmr') ? {
  'url': '192.168.153.1:5173',
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
