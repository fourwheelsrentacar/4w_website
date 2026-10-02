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
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        if (url === 'https://www.4wheelspk.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          url.includes('/booking/') ||
          url.includes('/fleet/') ||
          url.includes('/rent-a-car-') ||
          url.includes('/attach-your-car/')
        ) {
          item.changefreq = 'daily';
          item.priority = 0.9;
        } else if (
          url.includes('/vehicles/') ||
          url.includes('/locations/') ||
          url.includes('/routes/') ||
          url.includes('/official/')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        item.lastmod = new Date();
        return item;
      }
    }),
    tailwind()
  ],
});
