import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://4wheelsrentacar.pk',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [sitemap(), tailwind()],
});
