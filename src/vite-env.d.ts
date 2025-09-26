import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // répertoire de sortie
  },
  resolve: {
    alias: {
      '@': '/src', // permet d'utiliser "@/components/..." dans les imports
    },
  },
  server: {
    port: 5173, // pour le dev local
  },
})

