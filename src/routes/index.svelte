<script context="module">
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
	<section>
		{#each posts as post}
			<article>
				<img src={post.meta.cover} alt={post.meta.author} />
				<span>
					<h2><a href={post.path}>{post.meta.title}</a></h2>
					<p class="author">By {post.meta.author}</p>
					<a href={`${post.meta.category.toLowerCase()}`}>
						<p>{post.meta.category}</p>
					</a>
					<p>{post.meta.date}</p>
				</span>
			</article>
		{/each}
	</section>
	<DailyQuote />
</main>

<!-- TODO Dynamic routes for categories -->
<style>
	section {
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
		filter: hue-rotate(-0.25turn);
	}

	.author {
		padding: 0.5em 0;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 'DrukWide';
	}
</style>
