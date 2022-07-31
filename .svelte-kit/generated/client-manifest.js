export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/layouts/__layout-article.svelte"),
	() => import("../../src/routes/[category].svelte"),
	() => import("../../src/routes/comes-the-sun.md"),
	() => import("../../src/routes/i-need-to-move.md"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/movies-you-have-to-watch.md"),
	() => import("../../src/routes/why-i-love-women.md")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"comes-the-sun": [[0, 4], [1]],
	"i-need-to-move": [[0, 5], [1]],
	"movies-you-have-to-watch": [[0, 7], [1]],
	"why-i-love-women": [[0, 8], [1]],
	"[category]": [[0, 3], [1]]
};