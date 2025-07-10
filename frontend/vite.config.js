import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: './',
  server: {
    proxy: {
      '/api': 'https://ba-ua9j.onrender.com', // 👈 Proxy API calls to backend
    },
  },
})
