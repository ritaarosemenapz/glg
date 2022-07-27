<script>
	import RelatedPosts from './relatedPosts.svelte';
	import post from '../routes/index.svelte';
</script>

<aside>
	<div class="author-info">
		<!-- <img class="author-pic" src={post.authorPic} alt={post.meta.author} /> -->
		<!-- <p>{post.meta.author}</p> -->
	</div>
	<h3>BUY ME A COFFEE...</h3>
	<RelatedPosts />
</aside>
