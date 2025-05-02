import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React_Page/', // Chemin de base correct pour GitHub Pages
  plugins: [react()],
  server: {
    port: 3000, // Change port number
    open: true, // Auto-open browser
  },
  build: {
    outDir: 'build', // Change output directory
    minify: 'terser',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': '/src', // Path alias for imports
    },
  },
})