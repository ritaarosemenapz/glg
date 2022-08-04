var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bcategoryu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require("../../_app/immutable/chunks/index-511472e1.js");
var import_ReadMoreTag_72af3152 = require("../../_app/immutable/chunks/ReadMoreTag-72af3152.js");
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
const U5Bcategoryu5D = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let { FILTERED_POSTS } = $$props;
  let { CATEGORY } = $$props;
  if ($$props.FILTERED_POSTS === void 0 && $$bindings.FILTERED_POSTS && FILTERED_POSTS !== void 0)
    $$bindings.FILTERED_POSTS(FILTERED_POSTS);
  if ($$props.CATEGORY === void 0 && $$bindings.CATEGORY && CATEGORY !== void 0)
    $$bindings.CATEGORY(CATEGORY);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_511472e1.e)(CATEGORY.toUpperCase())} | GLG</title>`, ""}`, ""}

<section class="${"container svelte-6l13mn"}"><h2>Latest articles on ${(0, import_index_511472e1.e)(CATEGORY)}</h2>
	${FILTERED_POSTS.length ? (0, import_index_511472e1.b)(FILTERED_POSTS, (post) => {
    return `${post ? `<div class="${"card svelte-6l13mn"}"><img class="${"post-cover svelte-6l13mn"}"${(0, import_index_511472e1.a)("src", post.meta.cover, 0)} alt="${""}">
				<div class="${"card-info svelte-6l13mn"}"><div><h3>${(0, import_index_511472e1.e)(post.meta.title)}</h3></div>
					${(0, import_index_511472e1.v)(import_ReadMoreTag_72af3152.R, "ReadMoreTag").$$render($$result, { path: post.path.replace(".md", "") }, {}, {})}</div>
			</div>` : ``}`;
  }) : `<div class="${"no-posts-message"}"><p>Ups, seems like there are no posts in here yet...</p>
			<img class="${"no-posts-img svelte-6l13mn"}" src="${"https://media2.giphy.com/media/YrHW5dZMvtokZBuI2b/giphy.gif?cid=ecf05e47b6prmhfnjcuel39i7z0wktpx4f80v496vcdztnix&rid=giphy.gif&ct=g"}" alt="${""}">
		</div>`}
</section>`;
});
