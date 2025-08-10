// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env': process.env
    }
  },
  // Configuración para el servidor de desarrollo
  server: {
    port: 4321,
    host: true
  }
});