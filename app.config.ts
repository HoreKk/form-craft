import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  server: {
    // https://tanstack.com/router/v1/docs/framework/react/start/hosting
    preset: "node-server",
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
