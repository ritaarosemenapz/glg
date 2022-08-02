<script>
	export let name;
	export let bio;
	export let pic;
</script>

<aside>
	<div class="author-info">
		<!-- <div>
			<img class="author-pic" src={pic} alt={name.replace(/[^\S\r\n]/, '-').toLowerCase()} />
		</div> -->
		<div>
			<p class="author-name">By {name}</p>
			<p class="author-bio">{bio}</p>
		</div>
	</div>
	<h4>BUY ME A COFFEE...</h4>
</aside>

<slot />

<style>
	aside {
		grid-column: 3/4;
		padding: 0 3em;
	}

	@media (max-width: 900px) {
		aside {
			display: none;
		}
	}

	.author-info {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		column-gap: 1em;
	}

	.author-name {
		font-family: 'DrukWide';
		font-size: 1rem;
	}

	.author-info img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 50%;
		filter: grayscale();
	}
</style>
