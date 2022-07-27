<script>
import { data } from '../stores/femQuotes'

let randomIndex = Math.floor(Math.random() * data.length)
let randomQuote = data[randomIndex]

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
		font-size: 3rem;
		text-transform: capitalize;
        margin: 0;
        padding: 1em;
	}

    section {
        background-color: chartreuse;
    }

</style>