<script context="module">
	import FeaturedPost from '../components/FeaturedPost.svelte';
	import DailyQuote from '../components/DailyQuote.svelte';
	import { fade } from 'svelte/transition';
	import Card from '../components/Card.svelte';

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
		alt={posts[0].meta.alt}
		cover={posts[0].meta.cover}
		category={posts[0].meta.category}
		date={new Date(posts[0].meta.date).toDateString()}
	/>
	<DailyQuote />
	<section class="post-grid">
		{#each posts as post}
			{#if posts.indexOf(post) !== 0}
				<Card
					source={post.meta.cover}
					title={post.meta.title}
					category={post.meta.category}
					date={post.meta.date}
					path={post.path}
					alt={post.meta.alt}
				/>
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
		padding: 1em;
	}
</style>
