<script>
	import Header from 'src/components/header.svelte';
	import Footer from 'src/components/footer.svelte';
	import PostGrid from 'src/components/grid.svelte';
	import RelatedPosts from 'src/components/relatedPosts.svelte';
	import '../styles/global.css';
	import Sidebar from 'src/components/sidebar.svelte';
</script>

<header>
	<Header />
</header>
<main>
	<PostGrid />
	<slot />
	<Sidebar />
	<RelatedPosts />
</main>
<Footer />

<style>
	main {
		padding: 0 2em;
	}

	header {
		padding: 0 2em;
	}
</style>
