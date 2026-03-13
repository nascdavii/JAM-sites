import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                refrigeracao: resolve(__dirname, 'refrigeracao.html'),
                climatizacao: resolve(__dirname, 'climatizacao.html')
            }
        }
    }
});
