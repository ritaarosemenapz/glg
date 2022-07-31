<script>
	export let title;
	export let url;
</script>

<div>
	<h3>More like this</h3>
	<ul>
		<li>
			<a href={url}>{title}</a>
		</li>
	</ul>
</div>

<style>
	div {
		border-top-right-radius: 5px;
		border-top: 4px solid blue;
		border-right: 4px solid gold;
		max-width: 400px;
	}

	a {
		color: blue;
		font-weight: bold;
	}

	ul {
		padding: 0;
	}

	li {
		list-style: none;
	}
</style>
