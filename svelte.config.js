import adapter from '@sveltejs/adapter-auto';
import { windi } from 'svelte-windicss-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		 windi()
	],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
