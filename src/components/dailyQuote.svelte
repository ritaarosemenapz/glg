<script>
	import { FEM_QUOTES } from '../stores/femQuotes';

	let randomIndex = Math.floor(Math.random() * FEM_QUOTES.length);
	let randomQuote = FEM_QUOTES[randomIndex];
	const TWITTER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"></path></svg>`;
	const FACEBOOK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.8" d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"></path></svg>`;
	const TUMBLR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></path><path fill="#fff" d="M15 22V17H20V14L26 12V17H31V22H26V29C26 29 26 30.5 28 31C30 31.5 33 30 33 30L31 36H26C22.5 36 20 32.5 20 30V22H15Z"></path></g></svg>`;
</script>

<section class="container">
	{#if randomQuote}
		<blockquote class="daily-quote">
			<p>"{randomQuote.text}"</p>
			<p class="author">– {randomQuote.author}</p>
		</blockquote>
	{:else}
		<blockquote>"Women are strong as hell."</blockquote>
	{/if}
</section>

<style>
.container {
	display: flex;
	flex-direction: column;
}

	.daily-quote {
		margin: 0;
		padding: 1em 2em;
		font-family: "Arial";
		font-weight: bold;
		color: white;
		font-size: 1.8rem;
	}

	.author {
		color: var(--secondary);
	}

	section {
		align-items: center;
		background-color: var(--dark-text);
		padding: 0;
	}
</style>
