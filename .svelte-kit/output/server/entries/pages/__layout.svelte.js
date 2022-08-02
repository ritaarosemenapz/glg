import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../_app/immutable/chunks/index-511472e1.js";
const mobileMenu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".menu-small-screens-container.svelte-1d05y4m.svelte-1d05y4m{position:sticky;bottom:50px;left:85%;width:200px;border-radius:15px;z-index:1}.menu-small-screens.svelte-1d05y4m li.svelte-1d05y4m{display:flex;right:18px;flex-direction:column;margin:0;text-align:right}.menu-small-screens.svelte-1d05y4m.svelte-1d05y4m{background-color:var(--secondary);border-radius:10px;margin-right:1em;padding:0.6em}.menu-toggle.svelte-1d05y4m.svelte-1d05y4m{position:sticky;cursor:pointer;color:white;bottom:5px;left:85%;background-color:var(--primary);border-radius:5px;padding:0.6em}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="${"menu-small-screens-container svelte-1d05y4m"}">${``}
	<span class="${"menu-toggle svelte-1d05y4m"}">MENU</span>
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1lb27zc{text-align:left;position:absolute;line-height:1.5rem;padding:0.3em 2em;margin-top:4em;width:100%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = new Date().getFullYear();
  const HEART_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z" opacity=".2"></path><path fill="currentColor" d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z"></path></svg>`;
  $$result.css.add(css$2);
  return `<div class="${"container svelte-1lb27zc"}"><div class="${"footer-content"}"><p>${escape(year)} \xA9 All Rights Reserved. Crafted with <!-- HTML_TAG_START -->${HEART_ICON}<!-- HTML_TAG_END --> by Rita Arosemena-Perez. Built with
			<a href="${"https://svelte.dev"}">Svelte</a>.
		</p></div>
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-9h6p50.svelte-9h6p50{justify-content:space-between;flex-direction:column;width:100%}.container.svelte-9h6p50 .svelte-9h6p50{margin-left:0.5em}.top-container.svelte-9h6p50.svelte-9h6p50{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start}.menu-large-screens.svelte-9h6p50 li.svelte-9h6p50{display:flex}@media screen and (max-width: 1030px){.container.svelte-9h6p50.svelte-9h6p50{flex-direction:column}.menu-large-screens.svelte-9h6p50.svelte-9h6p50{display:none}}@media screen and (max-width: 580px){.top-container.svelte-9h6p50.svelte-9h6p50{flex-flow:row nowrap;justify-content:center;padding-bottom:0.5em}}li.svelte-9h6p50.svelte-9h6p50{list-style:none;font-family:var(--font-body)}ul.svelte-9h6p50.svelte-9h6p50{padding:0;margin:0}li.svelte-9h6p50 a.svelte-9h6p50{text-transform:uppercase;padding:0.6em}.site-title.svelte-9h6p50.svelte-9h6p50{text-decoration:none;margin:0;font-family:'Snowman'}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-9h6p50"}"><div class="${"top-container svelte-9h6p50"}"><h1 class="${"site-title svelte-9h6p50"}"><a href="${"/"}" class="${"svelte-9h6p50"}">GIRLPOWER</a></h1>
		<nav class="${"menu-large-screens svelte-9h6p50"}"><ul class="${"svelte-9h6p50"}"><li class="${"svelte-9h6p50"}"><a href="${"dating"}" class="${"svelte-9h6p50"}">Dating</a>
					<a href="${"movies"}" class="${"svelte-9h6p50"}">Movies</a>
					<a href="${"tv"}" class="${"svelte-9h6p50"}">TV</a>
					<a href="${"relationships"}" class="${"svelte-9h6p50"}">Relationships</a></li></ul></nav></div>
</div>`;
});
const global = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-h2isim.svelte-h2isim{padding:1em 0.2em;flex-direction:row;display:flex;align-items:baseline;background-color:var(--secondary)}@media screen and (max-width: 520px){header.svelte-h2isim.svelte-h2isim{flex-direction:column;align-items:center}}input.svelte-h2isim.svelte-h2isim{width:100%}.search-icon.svelte-h2isim.svelte-h2isim{padding:0.4em 0.8em;margin-left:1em;display:flex;background-color:white;border-radius:40px;width:300px}.search-box.svelte-h2isim.svelte-h2isim{border:none;padding:0 1rem}.search-box.svelte-h2isim.svelte-h2isim::placeholder{font-size:1rem}.search-container.svelte-h2isim.svelte-h2isim{display:flex;flex-direction:column;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:500px;text-align:center;border-radius:30px;background-color:var(--secondary);z-index:1}.search-container.svelte-h2isim .thumbnail.svelte-h2isim{width:60px;height:60px;object-fit:cover;border-radius:50%}.search-results.svelte-h2isim.svelte-h2isim{padding:1em;display:flex;align-items:center;justify-content:center}.search-results.svelte-h2isim .svelte-h2isim{margin-left:0.3em}.search-box.svelte-h2isim.svelte-h2isim:focus{outline:none}",
  map: null
};
async function load({ fetch }) {
  const POSTS = await fetch("../api/posts.json");
  const ALL_POSTS = await POSTS.json();
  return { props: { posts: ALL_POSTS } };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let searchQuery;
  const OPEN_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>`;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<header class="${"svelte-h2isim"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<span class="${"search-icon svelte-h2isim"}"><!-- HTML_TAG_START -->${OPEN_SEARCH_ICON}<!-- HTML_TAG_END -->
		<input class="${"search-box svelte-h2isim"}" type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", searchQuery, 0)}></span>
	${``}</header>
<main><article id="${"body"}">${slots.default ? slots.default({}) : ``}</article>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>
${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}`;
});
export {
  _layout as default,
  load
};
