import { c as create_ssr_component, e as escape, d as each, b as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-27acdd93.js";
import { R as ReadMoreTag } from "../../_app/immutable/chunks/ReadMoreTag-2fe9df27.js";
const _category__svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-6l13mn{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));padding:2em;gap:2em}.card.svelte-6l13mn{display:flex;justify-content:center;flex-flow:row wrap;max-width:400px;border:5px solid var(--primary);box-shadow:10px 10px var(--secondary);border-radius:5px;margin-bottom:2rem}.post-cover.svelte-6l13mn{object-fit:cover;width:500px;height:200px}.card-info.svelte-6l13mn{padding:1em;margin-bottom:1em}.no-posts-img.svelte-6l13mn{margin:0 auto}",
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

<section class="${"container svelte-6l13mn"}"><h2>Latest articles on ${escape(CATEGORY)}</h2>
	${FILTERED_POSTS.length ? each(FILTERED_POSTS, (post) => {
    return `${post ? `<div class="${"card svelte-6l13mn"}"><img class="${"post-cover svelte-6l13mn"}"${add_attribute("src", post.meta.cover, 0)} alt="${""}">
				<div class="${"card-info svelte-6l13mn"}"><div><h3>${escape(post.meta.title)}</h3></div>
					${validate_component(ReadMoreTag, "ReadMoreTag").$$render($$result, { path: post.path.replace(".md", "") }, {}, {})}</div>
			</div>` : ``}`;
  }) : `<div class="${"no-posts-message"}"><p>Ups, seems like there are no posts in here yet...</p>
			<img class="${"no-posts-img svelte-6l13mn"}" src="${"https://media2.giphy.com/media/YrHW5dZMvtokZBuI2b/giphy.gif?cid=ecf05e47b6prmhfnjcuel39i7z0wktpx4f80v496vcdztnix&rid=giphy.gif&ct=g"}" alt="${""}">
		</div>`}
</section>`;
});
export {
  U5Bcategoryu5D as default,
  load
};
