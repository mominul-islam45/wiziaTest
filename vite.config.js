import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: file => /\.(png|jpg|jpeg|gif|svg)$/.test(file), // Exclude image files
    },
  },
});
