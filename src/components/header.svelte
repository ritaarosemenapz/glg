<script>
	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<header>
	<div class="top-container">
		<div>
			<h1 class="site-title"><a href="/">GirlsLikeGirls</a></h1>
			<p class="site-description">Thou shalt love.</p>
		</div>
		<span on:click={toggleMenu} class="menu-toggle">MENU</span>
	</div>
	{#if showMenu}
		<nav>
			<ul>
				<li>
					<a href="#">Romance</a>
				</li>
				<li>
					<a href="#">Lifestyle</a>
				</li>
				<li>
					<a href="#">Sexuality</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
<div />

<style>
	header {
		position: fixed;
		padding-bottom: 2em;
		background-color: rgba(255, 255, 255, 0.968);
		width: 100%;
	}

	.top-container {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 0 1em;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	li {
		font-size: 1.4rem;
		list-style: none;
		border-bottom: 3px solid blue;
		padding: 0.5em 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
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

	div {
		height: 100px;
	}
</style>
