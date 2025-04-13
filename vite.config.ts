/// <reference types="node" />
<<<<<<< HEAD
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
=======
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
<<<<<<< HEAD
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // Use VITE_BASE_PATH if set (good for Firebase hosting), defaults to '/'
    base: env.VITE_BASE_PATH || '/',
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
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
=======
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Use VITE_BASE_PATH if set (good for Firebase hosting), defaults to '/'
    base: env.VITE_BASE_PATH || "/",
    plugins: [
      react({
        jsxRuntime: "automatic",
      }),
    ],
    server: {
      port: parseInt(env.VITE_PORT || "4000", 10),
    },
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
      },
    },
    css: {},
  };
});
