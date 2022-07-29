<script>
	import { slide } from 'svelte/transition';

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<div class="container">
	<div class="top-container">
		<div>
			<h1 class="site-title"><a href="/">GirlsLikeGirls</a></h1>
			<p class="site-description">Thou shalt love.</p>
		</div>
		<span on:click={toggleMenu} class="menu-toggle">MENU</span>
	</div>
	{#if showMenu}
		<nav transition:slide>
			<ul>
				<li>
					<a href="dating">Dating</a>
					<a href="movies">Movies</a>
					<a href="tv">TV</a>
					<a href="relationships">Relationships</a>
				</li>
			</ul>
		</nav>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		background-color: white;
		width: 100%;
	}

	.top-container {
		display: flex;
		flex-flow: row wrap;
		align-items: baseline;
		justify-content: space-between;
	}

	@media screen and (max-width: 700px) {
		.container {
			flex-direction: column;
		}
	}

	nav {
		display: flex;
		z-index: 1;
		justify-content: flex-end;
		flex-direction: column-reverse;
		background-color: white;
		width: 100%;
	}

	li {
		font-size: 1.4rem;
		list-style: none;
		border-bottom: 3px solid blue;
		padding: 0.5em 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	ul {
		padding: 0;
	}

	li a {
		color: black;
		text-transform: uppercase;
		font-weight: bold;
		padding: 0 0.7em;
	}

	li a:hover {
		text-shadow: 3px 2px 1px gold;
	}

	.site-title {
		text-decoration: none;
		margin-bottom: 0.2em;
	}

	.site-description {
		color: blue;
		font-family: 'DrukWide';
		margin-top: 0;
	}

	.menu-toggle {
		font-family: 'DrukWide';
		cursor: pointer;
	}
</style>
