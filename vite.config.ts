import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    __SITE_UPDATED_AT__: JSON.stringify(new Date().toISOString()),
  },
})
