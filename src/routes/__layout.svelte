<script>
	import '../styles/global.css';
	import Header from 'src/components/header.svelte';
	import Footer from 'src/components/footer.svelte';
</script>

<header>
	<Header />
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
</style>
