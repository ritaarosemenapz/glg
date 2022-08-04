import { c as create_ssr_component, e as escape, g as getContext, a as subscribe, b as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-27acdd93.js";
const AUTHOR_INFO = {
  name: "Rita Arosemena-Perez",
  bio: "I write about the things I love",
  picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60"
};
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-1g4g5f7{grid-column:3/4;padding:0 3em}@media(max-width: 900px){aside.svelte-1g4g5f7{display:none}}.author-info.svelte-1g4g5f7{display:grid;grid-template-columns:auto auto;align-items:center;column-gap:1em;font-size:1rem\n	}.author-name.svelte-1g4g5f7{font-weight:bold}.support-button.svelte-1g4g5f7{background-color:var(--primary);border:none;color:white;font-weight:bold;padding:0.5em;cursor:pointer;border-radius:5px}.support-button.svelte-1g4g5f7:focus{background-color:rgb(255, 91, 91);padding:0.45em}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { bio } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  $$result.css.add(css$1);
  return `<aside class="${"svelte-1g4g5f7"}"><div class="${"author-info svelte-1g4g5f7"}"><div><p class="${"author-name svelte-1g4g5f7"}">By ${escape(name)}</p>
			<p class="${"author-bio"}">${escape(bio)}</p></div></div>
	<button class="${"support-button svelte-1g4g5f7"}" type="${"button"}" name="${"support"}">\u2615\uFE0F Buy me a coffee</button></aside>

${slots.default ? slots.default({}) : ``}`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const SocialShare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<p>Current URL: ${escape($page.url.path)}</p>`;
});
const __layoutArticle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-body.svelte-6ry62i.svelte-6ry62i::first-letter{font-size:400%;padding:0.2em;font-weight:bold;font-family:var(--font-headings);color:var(--primary)}.post-body.svelte-6ry62i.svelte-6ry62i{padding:0 2em;line-height:1.8em}.container.svelte-6ry62i.svelte-6ry62i{display:grid}.container.svelte-6ry62i .svelte-6ry62i{margin:0.7em 0}@media(max-width: 1025px){.post.svelte-6ry62i.svelte-6ry62i{grid-template-columns:1fr}}.wrapper.svelte-6ry62i.svelte-6ry62i{grid-column:1/4}.post-header.svelte-6ry62i.svelte-6ry62i{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));column-gap:3em;align-items:center;justify-content:space-between}.col-2.svelte-6ry62i.svelte-6ry62i{display:flex;flex-direction:column;justify-content:space-between}img.svelte-6ry62i.svelte-6ry62i{width:700px;height:500px;object-fit:cover}.post-date.svelte-6ry62i.svelte-6ry62i{border-top:1px solid var(--primary);border-bottom:1px solid var(--primary);padding:1em}.post.svelte-6ry62i.svelte-6ry62i{grid-column:1/3;margin:3rem 2em}",
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
  return `<div class="${"container svelte-6ry62i"}"><section class="${"post svelte-6ry62i"}"><div class="${"wrapper svelte-6ry62i"}"><div class="${"post-header svelte-6ry62i"}"><div class="${"svelte-6ry62i"}"><p class="${"category-badge svelte-6ry62i"}">${escape(category.toUpperCase())}</p>
					<h1 class="${"svelte-6ry62i"}">${escape(title)}</h1>
					<p class="${"svelte-6ry62i"}">${escape(summary)}</p>
					<p class="${"svelte-6ry62i"}">By ${escape(AUTHOR_INFO.name)}</p>
					<p class="${"post-date svelte-6ry62i"}">${escape(new Date(date).toDateString())}</p></div>
				<div class="${"col-2 svelte-6ry62i"}"><img${add_attribute("src", cover, 0)}${add_attribute("alt", photoAlt, 0)} class="${"svelte-6ry62i"}">
					<p class="${"photo-credit svelte-6ry62i"}"><!-- HTML_TAG_START -->${photoCredit}<!-- HTML_TAG_END --></p></div></div></div></section>
	<aside class="${"svelte-6ry62i"}">${validate_component(SocialShare, "SocialShare").$$render($$result, {}, {}, {})}
		${validate_component(Sidebar, "Sidebar").$$render($$result, {
    name: AUTHOR_INFO.name,
    bio: AUTHOR_INFO.bio
  }, {}, {})}</aside>
	<article class="${"post-body svelte-6ry62i"}">${slots.default ? slots.default({}) : ``}</article>
</div>`;
});
export {
  _layout_article as default
};
