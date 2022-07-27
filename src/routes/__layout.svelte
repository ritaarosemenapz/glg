<script>
	import Header from 'src/components/header.svelte';
	import Footer from 'src/components/footer.svelte';
	import PostGrid from 'src/components/grid.svelte';
	import RelatedPosts from 'src/components/relatedPosts.svelte';
	import '../styles/global.css';
	import Sidebar from 'src/components/sidebar.svelte';
</script>

<Header />
<PostGrid />
<slot />
<Sidebar />
<RelatedPosts />
<Footer />
