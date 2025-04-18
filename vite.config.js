import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  return {
    // Use the repository name as base when building for production
    base: command === "build" ? "/portfolio/" : "/",
  };
});
