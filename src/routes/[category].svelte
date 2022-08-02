<script context="module">
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

<section class="container">
	<h2>Latest articles on {CATEGORY}</h2>
	{#each FILTERED_POSTS as post}
		{#if post}
			<div in:fade={{ duration: 400 }} class="card">
				<img class="post-cover" src={post.meta.cover} alt="" />
				<div class="card-info">
					<div>
						<h3>{post.meta.title}</h3>
						<p class="summary">{post.meta.summary}</p>
					</div>
					<a class="read-more-tag" href={post.path.replace('.md', '')}>Read More</a>
				</div>
			</div>
		{/if}
	{:else}
		<div class="no-posts-message">
			<h3>Ups, seems like there are not posts in here yet...</h3>
			<img
				class="no-posts-img"
				src="https://media2.giphy.com/media/YrHW5dZMvtokZBuI2b/giphy.gif?cid=ecf05e47b6prmhfnjcuel39i7z0wktpx4f80v496vcdztnix&rid=giphy.gif&ct=g"
				alt=""
			/>
		</div>
	{/each}
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 2em;
	}

	.card {
		display: flex;
		border: 5px solid blue;
		box-shadow: 10px 10px blue;
		border-radius: 5px;
		margin-bottom: 2rem;
	}

	.post-cover {
		object-fit: cover;
		width: 200px;
		height: 200px;
	}

	.card-info {
		padding: 1em;
	}

	.card-info * {
		margin: 0.8em 0;
	}

	.no-posts-img {
		width: 100%;
	}

	.summary {
		margin: 0;
	}
</style>
