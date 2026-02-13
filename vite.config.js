import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['roastandrelax.framework.autopath.ai', 'roastandrelax.localhost', 'localhost']
  }
});


