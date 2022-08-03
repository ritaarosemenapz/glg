<script>
	import { slide } from 'svelte/transition';
	const MENU_ICON= `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>`
	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<span on:click={toggleMenu} class="menu-toggle">{@html MENU_ICON}</span>
<nav class="menu-small-screens-container">
	{#if showMenu}
		<ul class="menu-small-screens" transition:slide={{ duration: 100 }}>
			<p on:click={toggleMenu} class="close-tag">CLOSE</p>
			<li on:click={toggleMenu}>
			</li>
			<li on:click={toggleMenu}>
				<a href="dating">Dating</a>
			</li>
			<li on:click={toggleMenu}>
				<a href="movies">Movies</a>
			</li>
			<li on:click={toggleMenu}>
				<a href="tv">TV</a>
			</li>
			<li on:click={toggleMenu}>
				<a href="relationships">Relationships</a>
			</li>
		</ul>
	{/if}
</nav>

<style>
	.menu-small-screens-container {
		display: flex;
		flex-direction: column;
		position: absolute;
		background-color: #f3f3f4;
		top: 0;
		transform: translateX(-20%);
		max-width: 600px;
		height: 100%;
		z-index: 1;
		text-align: right;
	}

	.credit {
	padding: 2em;
	padding-left: 5em;
	}

	.close-tag {
		cursor: pointer;
		font-weight: bold;
	}

	.menu-small-screens li {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding-top: 1em;
		padding-left: 2em;
		font-weight: bold;
		text-transform: uppercase;
	}

	.menu-small-screens {
		margin-right: 1em;
		padding: 0.6em;
	}

	.menu-toggle {
		cursor: pointer;
		font-weight: bold;
		display: none;
		color: var(--primary);
	}

	@media (max-width: 700px) {
	.menu-toggle {
		display: block;
		}
	}
</style>
