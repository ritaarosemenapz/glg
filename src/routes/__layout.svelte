<script context="module">
	import '../styles/global.css';
	import Header from 'src/components/Header.svelte';
	import Footer from 'src/components/Footer.svelte';
	import MobileMenu from '../components/mobileMenu.svelte';

	export async function load({ fetch }) {
		const POSTS = await fetch('../api/posts.json');
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
	const ARROW_RIGHT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12.7 15.3l2.6-2.6q.275-.275.275-.7q0-.425-.275-.7l-2.625-2.625q-.275-.275-.687-.263q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7l.9.9H8.975q-.425 0-.7.287Q8 11.575 8 12t.288.712Q8.575 13 9 13h3.2l-.925.925q-.275.275-.263.688q.013.412.288.687q.275.275.7.275q.425 0 .7-.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>`;
	let searchQuery;
	const OPEN_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>`;

	function hideSearchBox() {
		searchQuery = '';
	}
</script>

<header>
	<Header />
	<span class="search-icon"
		>{@html OPEN_SEARCH_ICON}
		<input class="search-box" bind:value={searchQuery} type="text" placeholder="Search..." />
	</span>
	{#if searchQuery}
		<section class="search-container">
			<h4>Stories</h4>
			{#each posts as post}
				{#if searchQuery && post.meta.title.includes(searchQuery.toLowerCase())}
					<div class="search-results">
						<img class="thumbnail" src={post.meta.cover} alt="" />
						<a on:click={hideSearchBox} href={post.path}>
							{post.meta.title.toUpperCase()}
						</a>
						<span>{@html ARROW_RIGHT_ICON}</span>
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
	<Footer />
</main>
<MobileMenu />

<style>
	/* #body {
		position: relative;
	} */
	header {
		padding: 1em 0.2em;
		flex-direction: row;
		display: flex;
		align-items: baseline;
		background-color: var(--secondary);
	}

	@media screen and (max-width: 520px) {
		header {
			flex-direction: column;
			align-items: center;
		}
	}

	input {
		width: 100%;
	}

	.search-icon {
		padding: 0.4em 0.8em;
		margin-left: 1em;
		display: flex;
		background-color: white;
		border-radius: 40px;
		width: 300px;
	}

	.search-box {
		border: none;
		padding: 0 1rem;
	}

	.search-box::placeholder {
		font-size: 1rem;
	}

	.search-container {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 500px;
		text-align: center;
		border-radius: 30px;
		background-color: var(--secondary);
		z-index: 1;
	}

	.search-container .thumbnail {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 50%;
	}

	.search-results {
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search-results * {
		margin-left: 0.3em;
	}

	.search-box:focus {
		outline: none;
	}
	/* 
	footer {
		position: absolute;
		bottom: 0;
	} */
</style>
