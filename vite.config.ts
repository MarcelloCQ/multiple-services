import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSitemap from './plugins/vite-plugin-sitemap';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSitemap()],
});
