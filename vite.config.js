import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fetch-api2/',
  /*
  server: {
    port: 3005,
  },
   */ 
  
});
