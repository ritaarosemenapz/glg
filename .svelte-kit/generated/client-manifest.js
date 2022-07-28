export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[category].svelte"),
	() => import("../../src/routes/alice-fell-in-love.md"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/layouts/article.svelte"),
	() => import("../../src/routes/layouts/sidebar.svelte"),
	() => import("../../src/routes/movies-you-have-to-watch.md"),
	() => import("../../src/routes/the-name-of-love.md"),
	() => import("../../src/routes/the-sexiest-women-on-planet.md"),
	() => import("../../src/routes/why-i-love-women.md")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"alice-fell-in-love": [[0, 3], [1]],
	"movies-you-have-to-watch": [[0, 7], [1]],
	"the-name-of-love": [[0, 8], [1]],
	"the-sexiest-women-on-planet": [[0, 9], [1]],
	"why-i-love-women": [[0, 10], [1]],
	"layouts/article": [[0, 5], [1]],
	"layouts/sidebar": [[0, 6], [1]],
	"[category]": [[0, 2], [1]]
};