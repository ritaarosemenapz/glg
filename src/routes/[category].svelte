<script context="module">
	import { AUTHOR_INFO } from '../stores/author';
	import { fade } from 'svelte/transition';

	export const load = async ({ fetch, params }) => {
		const RESPONSE = await fetch('api/posts.json');
		const POSTS = await RESPONSE.json();
		const CATEGORY = params.category;

		const FILTERED_POSTS = POSTS.filter((post) => {
			return post.meta.category.includes(CATEGORY);
		});

		return {
			props: {
				FILTERED_POSTS,
				CATEGORY
			}
		};
	};
</script>

<script>
	export let FILTERED_POSTS;
	export let CATEGORY;
</script>

<svelte:head>
	<title>{CATEGORY.toUpperCase()} | GLG</title>
</svelte:head>

{#each FILTERED_POSTS as post}
	<section transition:fade={{ duration: 200 }} class="card">
		<div class="card-info">
			<div>
				<p class="category-badge">
					{post.meta.category.toUpperCase()}
				</p>
				<a href={post.path.replace('.md', '')}>
					<h2>{post.meta.title}</h2>
				</a>
				<div class="col-2">
					<p>By {AUTHOR_INFO.name}</p>
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
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		align-items: stretch;
		border-bottom: 3px solid black;
	}

	.card-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 3em;
		padding: 2em;
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
		width: 400px;
		height: 300px;
		object-fit: cover;
	}

	h2 {
		text-transform: uppercase;
		font-size: 2.3rem;
		text-decoration: none;
		margin: 0;
	}
</style>
