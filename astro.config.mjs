import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.4wheelspk.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  redirects: {
    '/build-your-rental': '/booking/',
    '/book': '/booking/',
    '/reserve': '/booking/',
    '/reservation': '/booking/',
    '/get-a-quote': '/booking/',
    '/investor': '/attach-your-car/'
  },
  integrations: [sitemap(), tailwind()],
});
