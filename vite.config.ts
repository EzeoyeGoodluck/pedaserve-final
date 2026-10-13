import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname || process.cwd(), '.') },
  },
  ssr: {
    // Bundle everything into the SSR entry so the prerender script needs no node_modules at run time.
    noExternal: true,
  },
});
