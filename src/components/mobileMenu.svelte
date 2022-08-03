<script>
	import { slide } from 'svelte/transition';
	const MENU_ICON= `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--jam" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg`
	const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"></path></svg>`

	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<span on:click={toggleMenu} class="menu-toggle">{@html MENU_ICON}</span>
<nav class="menu-small-screens-container">
	{#if showMenu}
		<ul class="menu-small-screens" transition:slide={{ duration: 100 }}>
			<p on:click={toggleMenu} class="close-tag" aria-label="Close menu">{@html CLOSE_ICON}</p>
			<li on:click={toggleMenu}>
				<a href="dating">Dating</a>
				<a href="movies">Movies</a>
				<a href="tv">TV</a>
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
