<script>
	import { fade } from 'svelte/transition';
	import Sidebar from '../../components/sidebar.svelte';
	import { author } from '../../stores/author';
	export let title;
	export let category;
	export let cover;
	export let date;
	export let summary;

	let colors = ['#f4ded9', '#ffcbdd', '#0cf574', '#edff7e', '#29e7cd'];
	let random = Math.floor(Math.random() * colors.length);
	let color = colors[random];
</script>

<div transition:fade={{ duration: 200 }} class="container">
	<section class="post">
		<div class="wrapper" style="background-color: {color}">
			<div class="post-header">
				<div>
					<p class="category-badge" style="color: {colors[random + 1]}">
						{category.toUpperCase()}
					</p>
					<h1>{title}</h1>
					<p>{summary}</p>
					<div class="col-2">
						<p>By {author.name}</p>
					</div>
					<p>{date}</p>
				</div>
				<img src={cover} alt="" />
			</div>
		</div>
	</section>
	<aside>
		<Sidebar name={author.name} bio={author.bio} pic={author.picture} />
	</aside>
	<article class="post-body">
		<slot />
	</article>
</div>

<style>
	.post-body::first-letter {
		font-size: 500%;
		color: black;
		font-weight: bold;
	}

	.post-body {
		padding: 0 2.5em;
	}

	.category-badge {
		font-family: 'DrukWide';
		background-color: rgb(0, 0, 0);
		color: white;
		padding: 0.4em;
	}

	.container {
		display: grid;
	}

	@media (max-width: 1025px) {
		.post {
			grid-template-columns: 1fr;
		}
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

	.post {
		grid-column: 1/3;
		margin: 3rem 2em;
	}
</style>
