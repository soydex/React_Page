import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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