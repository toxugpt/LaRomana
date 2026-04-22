import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/LaRomana/',
  plugins: [react()],
  optimizeDeps: {
    include: ['qrcode'],
  },
})
