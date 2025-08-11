import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outputDir: 'dist',
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'EasyfolioShared',
            formats: ['es', 'cjs'],
            fileName: (format) => {
                if (format === 'cjs') return 'index.js';
                if (format === 'es') return 'index.mjs';
                return `index.${format}.js`;
            }
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})