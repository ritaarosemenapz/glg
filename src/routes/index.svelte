<script context="module">
	import FeaturedPost from '../components/FeaturedPost.svelte';
	import DailyQuote from 'src/components/DailyQuote.svelte';
	import { fade } from 'svelte/transition';

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
</script>

<svelte:head>
	<title>GirlsLikeGirls</title>
</svelte:head>

<main in:fade={{ duration: 400 }}>
	<FeaturedPost
		path={posts[0].path}
		title={posts[0].meta.title}
		summary={posts[0].meta.summary}
		cover={posts[0].meta.cover}
		category={posts[0].meta.category}
		date={new Date(posts[0].meta.date).toDateString()}
	/>
	<section class="quote">
		<DailyQuote />
	</section>
	<section class="post-grid">
		{#each posts as post}
			{#if posts.indexOf(post) !== 0}
				<article>
					<img src={post.meta.cover} alt={post.title} />
					<span>
						<div>
							<a class="category-badge" href={`${post.meta.category.toLowerCase()}`}
								>{post.meta.category}
							</a>
						</div>
						<h2>{post.meta.title}</h2>
						<p>
							{new Date(post.meta.date).toDateString()}
						</p>
						<a class="read-more-tag" href={post.path}>Read More</a>
					</span>
				</article>
			{/if}
		{/each}
	</section>
</main>

<style>
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
		justify-items: center;
		column-gap: 2em;
		align-items: stretch;
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
		border-left: 4px solid black;
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

	.quote {
		padding: 2em;
	}
</style>
