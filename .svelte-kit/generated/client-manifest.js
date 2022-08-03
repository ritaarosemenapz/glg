export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/layouts/__layout-article.svelte"),
	() => import("../../src/routes/[category].svelte"),
	() => import("../../src/routes/comes-the-sun.md"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/sample.md"),
	() => import("../../src/routes/sample2.md"),
	() => import("../../src/routes/sample3.md"),
	() => import("../../src/routes/sample4.md")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"comes-the-sun": [[0, 4], [1]],
	"sample": [[0, 6], [1]],
	"sample2": [[0, 7], [1]],
	"sample3": [[0, 8], [1]],
	"sample4": [[0, 9], [1]],
	"[category]": [[0, 3], [1]]
};