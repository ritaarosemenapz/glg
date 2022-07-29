<section>
	<div class="image-container">
		<img
			src="https://images.unsplash.com/photo-1508153460964-48ffffcb0829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
			alt="#"
		/>
	</div>
	<div class="text-container">
		<h2>This is so damn good</h2>
		<p>Some amazing content here from my last post.</p>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		align-items: center;
		padding-bottom: 1em;
	}

	h2 {
		font-size: 3.5rem;
		text-transform: uppercase;
	}

	.image-container {
		order: 1;
	}

	.text-container {
		margin-left: 2em;
	}
</style>
