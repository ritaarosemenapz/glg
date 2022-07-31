<script>
	import { fade } from 'svelte/transition';
	import Sidebar from '../../components/Sidebar.svelte';
	import { AUTHOR_INFO } from '../../stores/author';
	export let title;
	export let category;
	export let cover;
	export let date;
	export let summary;
	export let photoCredit;
	export let photoAlt;

	let colors = ['#f4ded9', '#ffcbdd', '#0cf574', '#edff7e', '#29e7cd'];
	let random = Math.floor(Math.random() * colors.length);
	let color = colors[random];
</script>

<div transition:fade={{ duration: 200 }} class="container">
	<section class="post">
		<div class="wrapper" style="background-color: {color}">
			<div class="post-header">
				<div class="post-header__text">
					<p class="category-badge" style="color: {colors[random + 1]}">
						{category.toUpperCase()}
					</p>
					<h1>{title}</h1>
					<p>{summary}</p>
					<div class="col-2">
						<p>By {AUTHOR_INFO.name}</p>
					</div>
					<p class="post-date">{new Date(date).toDateString()}</p>
					<p class="photo-credit">{@html photoCredit}</p>
				</div>
				<img src={cover} alt="" />
			</div>
		</div>
	</section>
	<aside>
		<Sidebar name={AUTHOR_INFO.name} bio={AUTHOR_INFO.bio} pic={AUTHOR_INFO.picture} />
	</aside>
	<article class="post-body">
		<slot />
	</article>
</div>

<style>
	.post-body::first-letter {
		font-size: 400%;
		padding: 0.2em;
		color: black;
		font-weight: bold;
	}

	.post-body::first-line {
		font-style: italic;
	}

	.post-body {
		padding: 0 4em;
		line-height: 1.8em;
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
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 3em;
		align-items: center;
		justify-content: space-between;
	}

	.post-header__text {
		margin-left: 2em;
	}

	.col-2 {
		display: flex;
		font-family: 'DrukBold';
		text-transform: uppercase;
		font-size: 0.8rem;
		justify-content: space-between;
	}

	img {
		width: 700px;
		height: 500px;
		object-fit: cover;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2rem;
	}

	.photo-credit,
	.post-date {
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	.post {
		grid-column: 1/3;
		margin: 3rem 2em;
	}
</style>
