import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: ['line', 'monochrome', 'thinline', 'solid'].map((p: string) =>
        resolve(__dirname, `generated/${p}/${p}.ts`)
      ),
      name: '@tooni/iconscout-unicons',
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
