import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://davidcharif.github.io',
  base: '/Astro-Blog',
  integrations: [preact(), react()]
});