import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  assetsInclude: ["**/*.wasm"],
  build: {
    minify: "terser" as const,
    terserOptions: {
      compress: {
        // Keeps class names (Entity names) from being mangled
        keep_classnames: true,
        // Keeps function names (Migration names) from being mangled
        keep_fnames: true,
      },
      mangle: {
        // Double-check mangling also respects class names
        keep_classnames: true,
        keep_fnames: true,
      },
    } as any,
  },

  esbuild: {
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      } as any,
    },
  },
  optimizeDeps: {
    // Force Vite to include these so metadata isn't lost
    include: ["reflect-metadata", "typeorm"],
  },
});
