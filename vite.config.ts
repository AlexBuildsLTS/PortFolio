/// <reference types="node" />
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      // Use VITE_BASE_PATH if set (good for Firebase hosting), defaults to '/'
      base: env.VITE_BASE_PATH || '/',
      // Add this to include PDF files in build
      assetsInclude: ['**/*.pdf'],
      plugins: [
        react({
          jsxRuntime: 'automatic',
        }),
      ],
      server: {
        port: parseInt(env.VITE_PORT || '4000', 10),
      },
      build: {
        outDir: 'dist',
        rollupOptions: {
          output: {
            // Configure the output chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
          },
        },
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
        // Explicitly define extensions to resolve
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      optimizeDeps: {
        // include: ['react', 'react-dom'], // Add frequently used dependencies here
      },
  };
});