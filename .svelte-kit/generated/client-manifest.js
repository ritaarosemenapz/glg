export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/layouts/__layout-article.svelte"),
	() => import("../../src/routes/[category].svelte"),
	() => import("../../src/routes/comes-the-sun.md"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/sample.md")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"comes-the-sun": [[0, 4], [1]],
	"sample": [[0, 6], [1]],
	"[category]": [[0, 3], [1]]
};