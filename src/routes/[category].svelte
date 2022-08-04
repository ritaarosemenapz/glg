<script context="module">
	import { fade } from 'svelte/transition';
	import ReadMoreTag from '../components/ReadMoreTag.svelte';
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
					</div>
					<ReadMoreTag path={post.path.replace('.md', '')} />
				</div>
			</div>
		{/if}
	{:else}
		<div class="no-posts-message">
			<p>Ups, seems like there are no posts in here yet...</p>
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
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 2em;
		gap: 2em;
	}

	.card {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		max-width: 400px;
		border: 5px solid var(--primary);
		box-shadow: 10px 10px var(--secondary);
		border-radius: 5px;
		margin-bottom: 2rem;
	}

	.post-cover {
		object-fit: cover;
		width: 500px;
		height: 200px;
	}

	.card-info {
		padding: 1em;
		margin-bottom: 1em;
	}

	.no-posts-img {
		margin: 0 auto;
	}
</style>
