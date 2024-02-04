import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import zipPack from 'vite-plugin-zip-pack';


export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    reportCompressedSize: false,
    emptyOutDir: false
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        tags: [
          {
            injectTo: 'head-prepend',
            tag: 'script',
            attrs: {
              src: '.dev/add-eruda.js'
            }
          }
        ]
      }
    }),
    zipPack({
      outDir: '.dev',
      outFileName: 'sharer-dev.xdc'
    })
  ]
})