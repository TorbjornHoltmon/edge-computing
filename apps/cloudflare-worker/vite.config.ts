import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: true,
    target: "esnext",
    lib: {
      entry: "src/worker.ts",
      formats: ["es"],
      fileName: "worker",
    },
  },
});
