<script context="module">
	import { author } from '../stores/author';
	import { fade } from 'svelte/transition';
	const allPost = import.meta.glob('./*.md');
	let body = [];
	for (let path in allPost) {
		body.push(
			allPost[path]().then(({ metadata }) => {
				return {
					path,
					meta: metadata
				};
			})
		);
	}

	export const load = async ({ params }) => {
		const posts = await Promise.all(body);
		const category = params.category;

		const filteredPost = posts.filter((post) => {
			return post.meta.category.includes(category);
		});

		return {
			props: {
				filteredPost,
				category
			}
		};
	};
</script>

<script>
	export let filteredPost;
	export let category;
</script>

<svelte:head>
	<title>{category.toUpperCase()} | GLG</title>
</svelte:head>

{#each filteredPost as post}
	<section in:fade={{ duration: 400 }} class="card">
		<div class="card-info">
			<div>
				<p class="category-badge">
					{post.meta.category.toUpperCase()}
				</p>
				<a href={post.path.replace('.md', '')}>
					<h1>{post.meta.title}</h1>
				</a>
				<div class="col-2">
					<p>By {author.name}</p>
				</div>
			</div>
		</div>
		<div class="cover-container"><img src={post.meta.cover} alt="" /></div>
	</section>
{/each}

<style>
	.category-badge {
		font-family: 'DrukWide';
		padding: 0.4em;
	}

	.card {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		align-content: stretch;
		border-bottom: 3px solid black;
	}

	.card-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 3em;
		padding: 2em;
		align-items: stretch;
	}

	/* @media (max-width: 900) {
		.post {
			grid-template-columns: 1fr;
		}
	} */

	.col-2 {
		display: flex;
		font-family: 'DrukBold';
		text-transform: uppercase;
		font-size: 0.8rem;
		justify-content: space-between;
	}

	img {
		max-width: 100%;
		object-fit: cover;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2.3rem;
	}
</style>
