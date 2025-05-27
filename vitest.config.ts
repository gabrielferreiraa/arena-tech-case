import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    env: {
      PRODUCT_HUNT_GRAPHQL_API_URL: "https://test.producthunt.com/",
      PRODUCT_HUNT_API_TOKEN: "test-token-123",
    },
    setupFiles: ["./src/test/setup.ts"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
});
