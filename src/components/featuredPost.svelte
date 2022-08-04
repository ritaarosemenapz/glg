<script>
	export let title;
	export let cover;
	export let category;
	export let path;
	export let date;
	export let alt;
	import ReadMoreTag from './ReadMoreTag.svelte';
</script>

<section>
	<img src={cover} {alt} />
	<div class="text-container">
		<p class="category-badge">{category}</p>
		<h2 class="post-title"><a href={path}>{title}</a></h2>
		<p class="post-date">{date}</p>
		<ReadMoreTag {path} />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;
		background-color: var(--secondary);
		align-items: center;
		column-gap: 2em;
	}

	img {
		order: 1;
		width: 500px;
		height: 500px;
		object-fit: cover;
	}

	.text-container {
		margin-left: 2em;
		max-width: 800px;
	}

	.post-title a {
		font-family: var(--font-headings);
	}

	.post-title a:hover {
		color: var(--dark-text);
	}

	@media (max-width: 789px) {
		img {
			width: 400px;
			height: 400px;
		}
	}
</style>
