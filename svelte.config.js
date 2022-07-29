import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(), 
		alias: {
			src: path.resolve("./src"),
			img: path.resolve("./src/routes/images")
		}, 
		prerender: {
			default: true
		}
	},

	preprocess: [
		preprocess(), 
		mdsvex({
			extensions: ['.md', '.mdx', '.svx'], 
			layout: {
				article: "./src/routes/layouts/__layout-article.svelte", 
			}
		})
	]

};

export default config;
