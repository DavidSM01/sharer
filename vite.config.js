import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import zipPack from 'vite-plugin-zip-pack';


export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    reportCompressedSize: false
  },
  plugins: [
    createHtmlPlugin({
      minify: true
    }),
    zipPack({
      outDir: 'dist-xdc',
      outFileName: 'sharer.xdc'
    })
  ],
})