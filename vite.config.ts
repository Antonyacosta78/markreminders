import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [svelte()],
    assetsInclude: ["**/*.wasm"],
    esbuild: {
      keepNames: true, // Still highly recommended for ORM stability
      tsconfigRaw: {
        compilerOptions: {
          // Ensures decorators are handled exactly how TypeORM expects
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
        },
      },
    },
    optimizeDeps: {
      // Force Vite to include these so metadata isn't lost
      include: ["reflect-metadata", "typeorm"],
    },
  };
});
