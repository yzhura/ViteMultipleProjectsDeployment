/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { htmlFiles } from './getHTMLFileNames';

const input = { main: resolve(__dirname, 'src/index.html') };
htmlFiles.forEach((file) => {
  input[file.replace('.html', '')] = resolve(__dirname, 'src', file);
});

export default defineConfig({
  base:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '/ViteMultipleProjectsDeployment/Project2/dist',
  root: 'src',
  publicDir: '../public',
  plugins: [
    // https://github.com/alexlafroscia/vite-plugin-handlebars/pull/250 templates livereload
    handlebars({ partialDirectory: resolve(__dirname, 'src/templates') }),
  ],
  build: {
    rollupOptions: {
      input,
    },
    outDir: '../dist/',
    emptyOutDir: true,
  },
});
