<script>
export let source;
export let title;
export let category;
export let date;
export let path;
export let alt;
</script>

<article class="card">
  <img class="post-cover" src={source} alt={alt} />
  <div class="card-content">
      <a class="category-badge" href={category.toLowerCase()}
        >{category}
      </a>
    <h3><a href={path}>{title}</a></h3>
    <p class="post-date">
      {new Date(date).toDateString()}
    </p>
    <a class="read-more-tag" href={path}>Read More</a>
  </div >
</article>

<style>
.card {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 400px;
  border: 5px solid var(--dark-text);
  box-shadow: 10px 10px var(--secondary);
  border-radius: 5px;
  margin-bottom: 2rem;
}

.post-cover {
  object-fit: cover;
  width: 500px;
  height: 200px;
}

.card-content {
  padding: 1em;
}

img:hover {
  filter: hue-rotate(-150deg);
  clip-path: polygon(
    50% 0%,
    94% 2%,
    96% 18%,
    100% 70%,
    95% 98%,
    50% 100%,
    24% 98%,
    3% 95%,
    2% 34%,
    14% 5%
  );
}
</style>
