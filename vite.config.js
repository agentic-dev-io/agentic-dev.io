import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { rollupOptions: { input: { main: path.resolve(__dirname, 'index.html'), en: path.resolve(__dirname, 'en/index.html') } } },
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, '../cms/data/agentic-dev'),
      '@shared': path.resolve(__dirname, '../cms/data/shared'),
    },
  },
});
