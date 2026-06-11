import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        error404: resolve(__dirname, '404.html'),
        smartMobiles: resolve(__dirname, 'work/smart-mobiles.html'),
        akConstruction: resolve(__dirname, 'work/ak-construction.html'),
      },
    },
  },
});
