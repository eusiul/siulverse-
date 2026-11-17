// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración de Astro — salida 100% estática en /dist para servir con nginx.
// Cambiá `site` por el dominio final: afecta OpenGraph y canonical.
// El sitemap.xml es estático: está en /public/sitemap.xml (editalo si agregás páginas).
export default defineConfig({
  site: 'https://siulverse.com',
  integrations: [tailwind()],
  build: {
    // Inyecta el CSS crítico en el HTML cuando conviene (mejor Lighthouse).
    inlineStylesheets: 'auto',
  },
});
