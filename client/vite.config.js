
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), svgr(), jsconfigPaths()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
