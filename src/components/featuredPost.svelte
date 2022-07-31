<script>
	export let title;
	export let summary;
	export let cover;
	export let category;
	export let path;
</script>

<a href={path}>
	<section>
		<div class="image-container">
			<img src={cover} alt="#" />
		</div>
		<div class="text-container">
			<p class="category-badge">{category}</p>
			<h2>{title}</h2>
			<p class="summary">{summary}</p>
		</div>
	</section>
</a>

<style>
	section {
		display: grid;
		grid-template-columns: auto auto;
		justify-items: center;
		align-items: center;
		margin-top: 2em;
		padding-bottom: 1em;
		column-gap: 2em;
	}

	.summary {
		font-size: 1.8rem;
	}

	h2 {
		font-size: 3.5rem;
		text-transform: uppercase;
		margin: 0;
	}

	.image-container {
		order: 1;
		width: 400px;
	}

	.text-container {
		margin-left: 2em;
	}

	@media (max-width: 789px) {
		section {
			grid-template-columns: 1fr;
			justify-items: center;
		}

		h2 {
			font-size: 2rem;
		}

		.image-container {
			order: -1;
		}
	}
</style>
