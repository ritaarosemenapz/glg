<script context="module">
	import '../styles/global.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	export async function load({ fetch }) {
		const POSTS = await fetch('./api/posts.json');
		const ALL_POSTS = await POSTS.json();

		return {
			props: {
				posts: ALL_POSTS
			}
		};
	}
</script>

<script>
	export let posts;
	let showSearchBox = false;
	function displaySearchBox() {
		showSearchBox = !showSearchBox;
		if (searchQuery) {
			searchQuery = '';
		}
	}
	let searchQuery;
	const OPEN_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>`;
	const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"></path></svg>`;
</script>

<header>
	<Header />
	<span on:click={displaySearchBox} class="search-icon">{@html OPEN_SEARCH_ICON} </span>
	{#if showSearchBox}
		<section class="search-container">
			<p on:click={displaySearchBox} class="close-tag" aria-label="Close menu">
				{@html CLOSE_ICON}
			</p>
			<h4>Stories</h4>
			<input class="search-box" bind:value={searchQuery} type="text" placeholder="Search..." />
			{#each posts as post}
				{#if (searchQuery && post.meta.title.toUpperCase().includes(searchQuery)) || post.meta.title
						.toLowerCase()
						.includes(searchQuery)}
					<div class="search-results">
						<a on:click={displaySearchBox} href={post.path}>
							{post.meta.title.toUpperCase()} →
						</a>
					</div>
				{/if}
			{/each}
		</section>
	{/if}
</header>
<main>
	<article id="body">
		<slot />
	</article>
</main>
<footer>
	<Footer />
</footer>

<style>
	header {
		padding: 1em;
		display: flex;
		justify-content: space-between;
		background-color: var(--secondary);
	}

	input {
		width: 100%;
	}

	.search-icon {
		color: var(--primary);
		cursor: pointer;
	}

	.search-box {
		border: none;
		padding: 0.5rem;
		border-radius: 5px;
	}

	.search-box::placeholder {
		font-size: 1rem;
	}

	.search-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1em;
		border-radius: 10px;
		background-color: var(--accent);
		box-shadow: 10px 10px var(--dark-text);
		max-width: 900px;
		z-index: 1;
		color: white;
		text-align: center;
	}

	.search-results {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		margin: 1em 0;
	}

	.search-results * {
		margin-left: 0.3em;
		color: white;
		margin-bottom: 0.3em;
		font-weight: bold;
	}

	.search-box:focus {
		outline: none;
	}
</style>
