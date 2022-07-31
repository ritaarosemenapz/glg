<script context="module">
	import FeaturedPost from '../components/FeaturedPost.svelte';
	import DailyQuote from 'src/components/DailyQuote.svelte';

	export async function load({ fetch }) {
		const POSTS = await fetch('./api/posts.json');
		const ALL_POSTS = await POSTS.json();

		return {
			props: {
				posts: ALL_POSTS
			}
		};
	}
</script>

<script>
	export let posts;
	let searchQuery;
</script>

<svelte:head>
	<title>GirlsLikeGirls</title>
</svelte:head>

<!-- <input bind:value={searchQuery} type="text" name="" id="" placeholder="Search..." />
{#each posts as post}
	<section class="search-container" style="opacity: 1">
		{#if searchQuery && post.meta.title.includes(searchQuery)}
			<div class="search-results">
				<a href={post.path}>
					<h3>{post.meta.title}</h3>
				</a>
			</div>
		{/if}
	</section>
{/each} -->

{#if !searchQuery}
	<main style="opacity: 1;">
		<FeaturedPost
			path={posts[0].path}
			title={posts[0].meta.title}
			summary={posts[0].meta.summary}
			cover={posts[0].meta.cover}
			category={posts[0].meta.category}
		/>
		<DailyQuote />
		<section class="post-grid">
			{#each posts as post}
				{#if posts.indexOf(post) !== 0}
					<a href={post.path}>
						<article>
							<img src={post.meta.cover} alt={post.title} />
							<span>
								<div class="category-badge">
									<a href={`${post.meta.category.toLowerCase()}`}>{post.meta.category} </a>
								</div>
								<h2>{post.meta.title}</h2>
								<p>
									{new Date(post.meta.date).toDateString()}
								</p>
							</span>
						</article>
					</a>
				{/if}
			{/each}
		</section>
	</main>
{/if}

<style>
	main {
		opacity: 0;
	}

	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
		justify-items: center;
		column-gap: 2em;
		align-items: stretch;
		border-bottom: 2px solid black;
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: baseline;
		align-items: flex-start;
		width: 400px;
		gap: 2em;
		margin: 2em;
		padding: 1em;
		border-left: 2px solid black;
	}

	span {
		padding: 1em;
		margin: 0;
	}

	h2 {
		text-transform: uppercase;
		margin: 0;
	}

	a {
		text-transform: uppercase;
	}

	img:hover {
		filter: hue-rotate(-150deg);
		clip-path: polygon(
			50% 0%,
			94% 2%,
			96% 18%,
			100% 70%,
			95% 98%,
			50% 100%,
			24% 98%,
			3% 95%,
			2% 34%,
			14% 5%
		);
	}

	.search-container {
		background-color: yellow;
		opacity: 0;
		width: 100vw;
	}

	.search-results {
		text-transform: uppercase;
		padding: 1em;
	}

	.search-container h3 {
		line-height: 1em;
	}
</style>
