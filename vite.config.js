import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, '../cms/data/agentic-dev'),
      '@shared': path.resolve(__dirname, '../cms/data/shared'),
    },
  },
});
