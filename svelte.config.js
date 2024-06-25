import adapter from '@sveltejs/adapter-vercel';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		alias: {
			$lib: './src/lib'
		},
		adapter: adapter(),
		env: {
			dir: process.cwd(),
			publicPrefix: 'PUBLIC_'
		},
	},
	vite: {
		define: {
			'process.env': process.env,
		},
	},
};

export default config;
