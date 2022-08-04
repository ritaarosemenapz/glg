<script>
	import MobileMenu from './mobileMenu.svelte';
</script>

<MobileMenu />
<div class="container">
	<div class="top-container">
		<h1 class="site-title"><a href="/">GIRLPOWER</a></h1>
		<nav class="menu-large-screens">
			<ul>
				<li>
					<a href="dating">Dating</a>
					<a href="movies">Movies</a>
					<a href="tv">TV</a>
					<a href="relationships">Relationships</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	.container {
		justify-content: space-between;
		flex-direction: column;
	}

	.container {
		margin-left: 0.5em;
	}

	.top-container {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
	}

	.menu-large-screens {
		margin-right: 1em;
	}

	.menu-large-screens li {
		display: flex;
		flex-flow: row wrap;
		list-style: none;
		font-family: var(--font-body);
		gap: 0.7em;
		font-weight: bold;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	.site-title {
		text-decoration: none;
		margin: 0 1em 0 0;
		font-family: 'Snowman';
	}

	@media (max-width: 700px) {
		.top-container {
			justify-content: center;
		}
		.menu-large-screens {
			display: none;
		}
	}
</style>
