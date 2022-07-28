<script>
	import Header from 'src/components/header.svelte';
	import Footer from 'src/components/footer.svelte';
	import PostGrid from 'src/components/grid.svelte';
	import '../styles/global.css';
	import Sidebar from 'src/components/sidebar.svelte';
</script>

<header>
	<Header />
</header>
<main>
	<PostGrid />
	<article>
		<slot />
	</article>
	<Sidebar />
</main>
<Footer />

<!-- TODO Add dynamic routes for categories -->
<style>
	main {
		padding: 0 2em;
	}

	header {
		padding: 0 2em;
	}
</style>
