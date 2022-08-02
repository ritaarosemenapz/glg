import { c as create_ssr_component, e as escape, b as each, a as add_attribute } from "../../_app/immutable/chunks/index-511472e1.js";
const _category__svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1tgjgth.svelte-1tgjgth{display:flex;flex-direction:column;padding:2em}.card.svelte-1tgjgth.svelte-1tgjgth{display:flex;border:5px solid blue;box-shadow:10px 10px blue;border-radius:5px;margin-bottom:2rem}.post-cover.svelte-1tgjgth.svelte-1tgjgth{object-fit:cover;width:200px;height:200px}.card-info.svelte-1tgjgth.svelte-1tgjgth{padding:1em}.card-info.svelte-1tgjgth .svelte-1tgjgth{margin:0.8em 0}.no-posts-img.svelte-1tgjgth.svelte-1tgjgth{width:100%}.summary.svelte-1tgjgth.svelte-1tgjgth{margin:0}",
  map: null
};
const load = async ({ fetch, params }) => {
  const RESPONSE = await fetch("api/posts.json");
  const POSTS = await RESPONSE.json();
  const CATEGORY = params.category;
  const FILTERED_POSTS = POSTS.filter((post) => {
    return post.meta.category.includes(CATEGORY);
  });
  return { props: { FILTERED_POSTS, CATEGORY } };
};
const U5Bcategoryu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { FILTERED_POSTS } = $$props;
  let { CATEGORY } = $$props;
  if ($$props.FILTERED_POSTS === void 0 && $$bindings.FILTERED_POSTS && FILTERED_POSTS !== void 0)
    $$bindings.FILTERED_POSTS(FILTERED_POSTS);
  if ($$props.CATEGORY === void 0 && $$bindings.CATEGORY && CATEGORY !== void 0)
    $$bindings.CATEGORY(CATEGORY);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(CATEGORY.toUpperCase())} | GLG</title>`, ""}`, ""}

<section class="${"container svelte-1tgjgth"}"><h2>Latest articles on ${escape(CATEGORY)}</h2>
	${FILTERED_POSTS.length ? each(FILTERED_POSTS, (post) => {
    return `${post ? `<div class="${"card svelte-1tgjgth"}"><img class="${"post-cover svelte-1tgjgth"}"${add_attribute("src", post.meta.cover, 0)} alt="${""}">
				<div class="${"card-info svelte-1tgjgth"}"><div class="${"svelte-1tgjgth"}"><h3 class="${"svelte-1tgjgth"}">${escape(post.meta.title)}</h3>
						<p class="${"summary svelte-1tgjgth"}">${escape(post.meta.summary)}</p></div>
					<a class="${"read-more-tag svelte-1tgjgth"}"${add_attribute("href", post.path.replace(".md", ""), 0)}>Read More</a></div>
			</div>` : ``}`;
  }) : `<div class="${"no-posts-message"}"><h3>Ups, seems like there are not posts in here yet...</h3>
			<img class="${"no-posts-img svelte-1tgjgth"}" src="${"https://media2.giphy.com/media/YrHW5dZMvtokZBuI2b/giphy.gif?cid=ecf05e47b6prmhfnjcuel39i7z0wktpx4f80v496vcdztnix&rid=giphy.gif&ct=g"}" alt="${""}">
		</div>`}
</section>`;
});
export {
  U5Bcategoryu5D as default,
  load
};
