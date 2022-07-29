<script context="module">
	import FeaturedPost from '../components/featuredPost.svelte';
	import { author } from '../stores/author';
	import DailyQuote from 'src/components/dailyQuote.svelte';
	// @ts-ignore
	export const load = async ({ fetch }) => {
		const posts = await fetch('./api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export /**
	 * @type {any}
	 */
	let posts;
</script>

<svelte:head>
	<title>GirlsLikeGirls</title>
</svelte:head>

<main>
	<FeaturedPost />
	<DailyQuote />
	<section class="post-grid">
		{#each posts as post}
			<article>
				<a href={post.path}><img src={post.meta.cover} alt={post.title} /></a>
				<span>
					<div class="category-badge">
						<a href={`${post.meta.category.toLowerCase()}`}>{post.meta.category} </a>
					</div>
					<h2><a href={post.path}>{post.meta.title}</a></h2>
					<p class="author">By {author.name}</p>
					<p>
						{new Date(
							post.meta.date.toLocaleString('ko-KO', { dateStyle: 'full', timeStyle: 'long' })
						)}
					</p>
				</span>
			</article>
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

	a:hover {
		color: var(--primary);
		transition: 0.3s;
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

	.category-badge {
		margin-bottom: 1em;
		font-family: 'DrukWide';
	}

	.author {
		padding: 0.5em 0;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 'DrukWide';
	}
</style>
