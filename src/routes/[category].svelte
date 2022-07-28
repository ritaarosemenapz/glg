<script context="module">
	import RelatedPosts from 'src/components/relatedPosts.svelte';

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
	let colors = ['#f4ded9', '#ffcbdd', '#0cf574', '#edff7e', '#29e7cd'];
	let random = Math.floor(Math.random() * colors.length);
	let color = colors[random];
</script>

<svelte:head>
	<title>{category.toUpperCase()} | GLG</title>
</svelte:head>

{#each filteredPost as post}
	<article class="post">
		<div class="wrapper" style="background-color: {color}">
			<div class="post-header">
				<div>
					<p class="category-badge" style="color: {colors[random + 1]}">
						{post.meta.category}
					</p>
					<h1>{post.meta.title}</h1>
					<p>{post.meta.summary}</p>
					<div class="col-2">
						<p>By {post.meta.author}</p>
					</div>
					<p>{post.meta.date}</p>
				</div>
				<img src={post.meta.cover} alt="" />
			</div>
		</div>
		<section class="post-body">
			<RelatedPosts />
		</section>
		<!-- <aside>
		<div class="author-info">
			<img class="author-pic" src={post.authorPic} alt={post.author} />
			<p>{post.authorBio}</p>
		</div>
		<h3>BUY ME A COFFEE...</h3>
		<RelatedPosts />
	</aside> -->
	</article>
{/each}

<style>
	.category-badge {
		font-family: 'DrukWide';
		background-color: rgb(0, 0, 0);
		color: white;
		padding: 0.4em;
	}

	.author-info {
		display: grid;
		grid-template-columns: auto auto;
		column-gap: 1em;
		align-items: center;
	}

	.author-info img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 50%;
		filter: grayscale();
	}

	.post {
		display: grid;
		grid-template-columns: 1fr, 1fr;
	}

	.wrapper {
		grid-column: 1/4;
	}

	.post-header {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 3em;
		padding: 2em;
		align-items: stretch;
	}

	aside {
		grid-column: 3/4;
		padding: 1em 2em;
	}

	@media (max-width: 1025px) {
		aside {
			display: none;
		}

		.post {
			grid-template-columns: 1fr;
		}
	}

	.col-2 {
		display: flex;
		font-family: 'DrukBold';
		text-transform: uppercase;
		font-size: 0.8rem;
		justify-content: space-between;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2.3rem;
	}

	section {
		grid-column: 1/3;
		margin: 3rem 2em;
		line-height: 1.6rem;
	}

	section::first-letter {
		font-size: 500%;
		color: black;
		font-weight: bold;
	}
</style>
