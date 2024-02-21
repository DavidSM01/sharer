import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';


let serveInjections = {
  tags: [
    {
      injectTo: 'head-prepend',
      tag: 'script',
      attrs: {
        src: './node_modules/eruda/eruda.js'
      }
    },
    {
      injectTo: 'head-prepend',
      tag: 'script',
      attrs: {
        src: './.dev/start-eruda.js'
      }
    }
  ]
};


let buildInjections = {
  tags: [
    {
      injectTo: 'head-prepend',
      tag: 'script',
      attrs: {
        src: 'eruda.js'
      }
    },
    {
      injectTo: 'head-prepend',
      tag: 'script',
      attrs: {
        src: 'start-eruda.js'
      }
    }
  ]
};

export default defineConfig(({ command }) => {
  let injections;
  if (command === 'serve') {
    injections = serveInjections;
  } else {
    injections = buildInjections;
  }

  return {
    plugins: [
      createHtmlPlugin({
        minify: false,
        inject: injections
      })
    ],
    build: {
      minify: false,
      assetsInlineLimit: 0,
      reportCompressedSize: false
    }
  }
})  
