<script>
	import RelatedPosts from '../../components/relatedPosts.svelte';
	export let author;
	export let authorBio;
	export let authorPic;
</script>

<aside>
	<div class="author-info">
		<img class="author-pic" src={authorPic} alt="" />
		<p>{author} {authorBio}</p>
	</div>
	<h3>BUY ME A COFFEE...</h3>
	<RelatedPosts />
</aside>

<slot />
