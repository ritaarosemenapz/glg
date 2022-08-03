<script>
	export let name;
	export let bio;
</script>

<aside>
	<div class="author-info">
		<div>
			<p class="author-name">By {name}</p>
			<p class="author-bio">{bio}</p>
		</div>
	</div>
	<button class="support-button" type="button" name="support">☕️ Buy me a coffee</button>
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
		font-size: 1rem
	}

	.author-name {
		font-weight: bold;
	}

	.support-button {
		background-color: var(--primary);
		border: none;
		color: white;
		font-weight: bold;
		padding: 0.5em;
		cursor: pointer;
		border-radius: 5px;
	}

	.support-button:focus {
		background-color: rgb(255, 91, 91);
		padding: 0.45em;
	}

</style>
