import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000
  },
  optimizeDeps: {
    exclude: ["pdfjs-dist"]
  },
  ssr: {
    noExternal: ["pdfjs-dist"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split mermaid into smaller chunks
          if (id.includes("mermaid")) {
            return "mermaid-vendor";
          }
          // Split pdf.js into its own chunk
          if (id.includes("pdfjs-dist") || id.includes("pdf.worker")) {
            return "pdf-vendor";
          }
          // Split large UI libraries
          if (id.includes("framer-motion")) {
            return "framer-motion";
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      srcDirectory: "src",
      router: {
        routesDirectory: "routes"
      }
    }),
    viteReact()
  ]
});
