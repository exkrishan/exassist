import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});