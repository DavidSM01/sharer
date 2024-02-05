import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import zipPack from 'unplugin-zip-pack/vite';


export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [
        createHtmlPlugin({
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
        })
      ]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      build: {
        assetsInlineLimit: 0,
        reportCompressedSize: false
      },
      plugins: [
        createHtmlPlugin({
          minify: true
        }),
        zipPack({
          out: 'dist/sharer.xdc',
        })
      ]
    }
  }
})  