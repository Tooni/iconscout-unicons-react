import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: {
        line: resolve(__dirname, 'generated/line/index.ts'),
        monochrome: resolve(__dirname, 'generated/monochrome/index.ts'),
        thinline: resolve(__dirname, 'generated/thinline/index.ts'),
        solid: resolve(__dirname, 'generated/solid/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
