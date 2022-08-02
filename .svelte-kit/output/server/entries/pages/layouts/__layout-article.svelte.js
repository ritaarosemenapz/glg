import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-511472e1.js";
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-6ovyhz{grid-column:3/4;padding:0 3em}@media(max-width: 900px){aside.svelte-6ovyhz{display:none}}.author-info.svelte-6ovyhz{display:grid;grid-template-columns:auto auto;align-items:center;column-gap:1em}.author-name.svelte-6ovyhz{font-family:'DrukWide';font-size:1rem}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { bio } = $$props;
  let { pic } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  if ($$props.pic === void 0 && $$bindings.pic && pic !== void 0)
    $$bindings.pic(pic);
  $$result.css.add(css$1);
  return `<aside class="${"svelte-6ovyhz"}"><div class="${"author-info svelte-6ovyhz"}">
		<div><p class="${"author-name svelte-6ovyhz"}">By ${escape(name)}</p>
			<p class="${"author-bio"}">${escape(bio)}</p></div></div>
	<h4>BUY ME A COFFEE...</h4></aside>

${slots.default ? slots.default({}) : ``}`;
});
const AUTHOR_INFO = {
  name: "Rita Arosemena-Perez",
  bio: "I write about the things I love",
  picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60"
};
const __layoutArticle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-body.svelte-eoocky.svelte-eoocky::first-letter{font-size:400%;padding:0.2em;font-weight:bold;font-family:var(--font-headings);color:var(--primary)}.post-body.svelte-eoocky.svelte-eoocky{padding:0 2em;line-height:1.8em}.container.svelte-eoocky.svelte-eoocky{display:grid}.container.svelte-eoocky .svelte-eoocky{margin:0.7em 0}@media(max-width: 1025px){.post.svelte-eoocky.svelte-eoocky{grid-template-columns:1fr}}.wrapper.svelte-eoocky.svelte-eoocky{grid-column:1/4}.post-header.svelte-eoocky.svelte-eoocky{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));column-gap:3em;align-items:center;justify-content:space-between}.col-2.svelte-eoocky.svelte-eoocky{display:flex;flex-direction:column;justify-content:space-between}img.svelte-eoocky.svelte-eoocky{width:700px;height:500px;object-fit:cover}.photo-credit.svelte-eoocky.svelte-eoocky,.post-date.svelte-eoocky.svelte-eoocky{font-size:1rem;text-transform:uppercase}.post-date.svelte-eoocky.svelte-eoocky{border-top:1px solid var(--primary);border-bottom:1px solid var(--primary);padding:1em}.post.svelte-eoocky.svelte-eoocky{grid-column:1/3;margin:3rem 2em}",
  map: null
};
const _layout_article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { category } = $$props;
  let { cover } = $$props;
  let { date } = $$props;
  let { summary } = $$props;
  let { photoCredit } = $$props;
  let { photoAlt } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.photoCredit === void 0 && $$bindings.photoCredit && photoCredit !== void 0)
    $$bindings.photoCredit(photoCredit);
  if ($$props.photoAlt === void 0 && $$bindings.photoAlt && photoAlt !== void 0)
    $$bindings.photoAlt(photoAlt);
  $$result.css.add(css);
  return `<div class="${"container svelte-eoocky"}"><section class="${"post svelte-eoocky"}"><div class="${"wrapper svelte-eoocky"}"><div class="${"post-header svelte-eoocky"}"><div class="${"svelte-eoocky"}"><p class="${"category-badge svelte-eoocky"}">${escape(category.toUpperCase())}</p>
					<h1 class="${"svelte-eoocky"}">${escape(title)}</h1>
					<p class="${"svelte-eoocky"}">${escape(summary)}</p>
					<p class="${"svelte-eoocky"}">By ${escape(AUTHOR_INFO.name)}</p>
					<p class="${"post-date svelte-eoocky"}">${escape(new Date(date).toDateString())}</p></div>
				<div class="${"col-2 svelte-eoocky"}"><img${add_attribute("src", cover, 0)} alt="${""}" class="${"svelte-eoocky"}">
					<p class="${"photo-credit svelte-eoocky"}"><!-- HTML_TAG_START -->${photoCredit}<!-- HTML_TAG_END --></p></div></div></div></section>
	<aside class="${"svelte-eoocky"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {
    name: AUTHOR_INFO.name,
    bio: AUTHOR_INFO.bio,
    pic: AUTHOR_INFO.picture
  }, {}, {})}</aside>
	<article class="${"post-body svelte-eoocky"}">${slots.default ? slots.default({}) : ``}</article>
</div>`;
});
export {
  _layout_article as default
};
