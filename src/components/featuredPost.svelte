<script>
	export let title;
	export let summary;
	export let cover;
	export let category;
	export let path;
	export let date;
</script>

<section>
	<!-- <div class="image-container"> -->
	<img src={cover} alt="#" />
	<!-- </div> -->
	<div class="text-container">
		<p class="category-badge">{category}</p>
		<a class="post-title" href={path}>{title}</a>
		<p class="post-summary">{summary}</p>
		<p>{date}</p>
		<a class="read-more-tag" href={path}>Read More</a>
	</div>
</section>

<style>
	section {
		display: grid;
		background-color: var(--primary);
		grid-template-columns: auto auto;
		justify-content: space-between;
		align-items: center;
		column-gap: 2em;
	}

	img {
		order: 1;
		width: 500px;
		height: 500px;
		object-fit: cover;
	}

	.category-badge {
		color: white;
	}

	.text-container {
		margin-left: 2em;
		color: white;
	}

	.post-title {
		font-size: 2rem;
		font-family: var(--font-headings);
		color: white;
	}

	a {
		color: white;
	}

	a:hover {
		color: var(--dark-text);
	}

	@media (max-width: 789px) {
		img {
			width: 400px;
			height: 400px;
		}
	}
</style>
