<script>
	import { fade } from 'svelte/transition';
	import { AUTHOR_INFO } from '../../stores/author';
	export let title;
	export let category;
	export let cover;
	export let date;
	export let summary;
	export let photoCredit;
	export let photoAlt;
</script>

<div in:fade={{ duration: 400 }} class="container">
	<section class="post">
		<div class="wrapper">
			<div class="post-header">
				<div>
					<p class="category-badge">
						{category.toUpperCase()}
					</p>
					<h1>{title}</h1>
					<p>{summary}</p>
					<p>By {AUTHOR_INFO.name}</p>
					<p class="post-date">{new Date(date).toDateString()}</p>
				</div>
				<div class="col-2">
					<img src={cover} alt={photoAlt} />
					<p class="photo-credit">{@html photoCredit}</p>
				</div>
			</div>
		</div>
	</section>
	<aside />
	<article class="post-body">
		<slot />
	</article>
</div>

<style>
	.post-body::first-letter {
		font-size: 400%;
		padding: 0.2em;
		font-weight: bold;
		font-family: var(--font-headings);
		color: var(--primary);
	}

	.post-body {
		padding: 0 2em;
		line-height: 1.8em;
	}

	.container {
		display: grid;
	}

	.container * {
		margin: 0.7em 0;
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

	.col-2 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	img {
		width: 700px;
		height: 500px;
		object-fit: cover;
	}

	.post-date {
		border-top: 1px solid var(--primary);
		border-bottom: 1px solid var(--primary);
		padding: 1em;
	}

	.post {
		grid-column: 1/3;
		margin: 3rem 2em;
	}

</style>
