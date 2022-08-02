<script>
	import { fly } from 'svelte/transition';

	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<nav class="menu-small-screens-container">
	{#if showMenu}
		<ul class="menu-small-screens" transition:fly={{ duration: 200 }}>
			<li on:click={toggleMenu}>
				<a href="dating">Dating</a>
				<a href="movies">Movies</a>
				<a href="tv">TV</a>
				<a href="relationships">Relationships</a>
			</li>
		</ul>
	{/if}
	<span on:click={toggleMenu} class="menu-toggle">MENU</span>
</nav>

<style>
	.menu-small-screens-container {
		position: sticky;
		bottom: 50px;
		left: 85%;
		width: 200px;
		border-radius: 15px;
		z-index: 1;
	}

	.menu-small-screens li {
		display: flex;
		right: 18px;
		flex-direction: column;
		margin: 0;
		text-align: right;
	}

	.menu-small-screens {
		background-color: var(--secondary);
		border-radius: 10px;
		margin-right: 1em;
		padding: 0.6em;
	}

	.menu-toggle {
		position: sticky;
		cursor: pointer;
		color: white;
		bottom: 5px;
		left: 85%;
		background-color: var(--primary);
		border-radius: 5px;
		padding: 0.6em;
	}
</style>
