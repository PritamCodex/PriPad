// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // This will force Vite to use port 5001
    strictPort: true, // This will throw an error if port 5001 is not available
  }
})