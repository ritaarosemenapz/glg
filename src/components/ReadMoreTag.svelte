<script>
  export let path;
</script>

<a class="read-more-tag" href={path}>Read more</a>

<style>
.read-more-tag {
  text-transform: uppercase;
  color: inherit;
  border-bottom: 2px solid var(--dark-text);
  font-weight: bold;
}

.read-more-tag:hover {
  color: var(--dark-text);
}
</style>
