<script context="module">
	import '../styles/global.css';
	import Header from 'src/components/Header.svelte';
	import Footer from 'src/components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';

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
	let searchQuery = '';
</script>

<header>
	<Header />
	<div>
		<input
			class="search-box"
			bind:value={searchQuery}
			type="text"
			name=""
			id=""
			placeholder="Search..."
		/>
		{#each posts as post}
			<section class="search-container" style="opacity: 1">
				{#if searchQuery && post.meta.title.includes(searchQuery)}
					<div class="search-results">
						<a href={post.path}>
							<h3>{post.meta.title}</h3>
						</a>
					</div>
				{/if}
			</section>
		{/each}
	</div>
</header>
<main>
	<article>
		<slot />
	</article>
</main>
<Footer />

<style>
	header {
		padding: 0 2em;
	}

	header {
		display: flex;
		align-items: center;
	}

	.search-box {
		border-radius: 5px;
	}
</style>
