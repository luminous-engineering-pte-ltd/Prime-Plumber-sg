import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://primeplumbingsg.com',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
});
