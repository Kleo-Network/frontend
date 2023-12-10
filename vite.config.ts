import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/',
  plugins: [react(), svgr()]
  // build: {
  //   assetsInlineLimit: 1000000,
  //   assetsInclude: ['**/*.svg'],
  //   commonjsOptions: {
  //     include: []
  //   }
  //   // rollupOptions: {
  //   //   plugins: [rollupNodePolyFill()]
  //   // }
  // }
  // optimizeDeps: {
  //   disabled: false,
  //   esbuildOptions: {
  //     // Enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         process: true,
  //         buffer: true
  //       }),
  //       NodeModulesPolyfillPlugin()
  //     ]
  //   }
  // }
})
