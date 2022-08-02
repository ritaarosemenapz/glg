<div class="container">
	<div class="top-container">
		<h1 class="site-title"><a href="/">GIRLPOWER</a></h1>
		<nav class="menu-large-screens">
			<ul>
				<li>
					<a href="dating">Dating</a>
					<a href="movies">Movies</a>
					<a href="tv">TV</a>
					<a href="relationships">Relationships</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	.container {
		justify-content: space-between;
		flex-direction: column;
		width: 100%;
	}

	.container * {
		margin-left: 0.5em;
	}

	.top-container {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
	}

	.menu-large-screens li {
		display: flex;
	}

	@media screen and (max-width: 1030px) {
		.container {
			flex-direction: column;
		}
		.menu-large-screens {
			display: none;
		}
	}
	@media screen and (max-width: 580px) {
		.top-container {
			flex-flow: row nowrap;
			justify-content: center;
			padding-bottom: 0.5em;
		}
	}

	li {
		list-style: none;
		font-family: var(--font-body);
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li a {
		text-transform: uppercase;
		padding: 0.6em;
	}

	.site-title {
		text-decoration: none;
		margin: 0;
		font-family: 'Snowman';
	}
</style>
