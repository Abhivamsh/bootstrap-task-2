import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/bootstrap-task-2/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})