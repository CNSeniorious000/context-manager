import { sveltekit } from "@sveltejs/kit/vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	worker: { format: "es" }
})
