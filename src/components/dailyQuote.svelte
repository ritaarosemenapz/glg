<script>
	import { data } from '../stores/femQuotes';

	let randomIndex = Math.floor(Math.random() * data.length);
	let randomQuote = data[randomIndex];
</script>

<section>
	{#if randomQuote}
		<blockquote>"{randomQuote.text}" - {randomQuote.author}</blockquote>
	{:else if randomQuote}
		<blockquote>"Women are strong as hell."</blockquote>
	{/if}
</section>

<style>
	blockquote {
		font-size: 2.8rem;
		margin: 0;
		padding: 1em;
	}

	section {
		display: flex;
		background-color: chartreuse;
		align-items: center;
		border-left: 5px solid black;
		border-top: 3px solid black;
	}
</style>
