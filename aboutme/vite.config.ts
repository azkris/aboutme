import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

// https://vite.dev/config/
const viteConfig = defineViteConfig({
	plugins: [react(), tailwindcss()],
});

const vitestConfig = defineVitestConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "setup.ts",
	},
});

export default mergeConfig(viteConfig, vitestConfig);
