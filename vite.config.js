import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';


export default defineConfig({
  plugins: [
    createHtmlPlugin()
  ],
  build: {
    assetsInlineLimit: 0
  }
})