import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
const mobileMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".menu-small-screens-container.svelte-17dibnu.svelte-17dibnu{display:flex;flex-direction:column;position:absolute;background-color:#f3f3f4;top:0;transform:translateX(-20%);max-width:600px;height:100%;z-index:1;text-align:right}.menu-small-screens.svelte-17dibnu li.svelte-17dibnu{display:flex;flex-direction:column;margin:0;padding-top:1em;padding-left:2em;font-weight:bold;text-transform:uppercase}.menu-small-screens.svelte-17dibnu.svelte-17dibnu{margin-right:1em;padding:0.6em}.menu-toggle.svelte-17dibnu.svelte-17dibnu{cursor:pointer;font-weight:bold;display:none;color:var(--primary)}@media(max-width: 700px){.menu-toggle.svelte-17dibnu.svelte-17dibnu{display:block}}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const MENU_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--jam" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg`;
  $$result.css.add(css$2);
  return `<span class="${"menu-toggle svelte-17dibnu"}"><!-- HTML_TAG_START -->${MENU_ICON}<!-- HTML_TAG_END --></span>
<nav class="${"menu-small-screens-container svelte-17dibnu"}">${``}
</nav>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-2fjz98.svelte-2fjz98{justify-content:space-between;flex-direction:column}.container.svelte-2fjz98.svelte-2fjz98{margin-left:0.5em}.top-container.svelte-2fjz98.svelte-2fjz98{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start}.menu-large-screens.svelte-2fjz98.svelte-2fjz98{margin-right:1em}.menu-large-screens.svelte-2fjz98 li.svelte-2fjz98{display:flex;flex-flow:row wrap;list-style:none;font-family:var(--font-body);gap:0.7em;font-weight:bold}ul.svelte-2fjz98.svelte-2fjz98{padding:0;margin:0}.site-title.svelte-2fjz98.svelte-2fjz98{text-decoration:none;margin:0 1em 0 0;font-family:'Snowman'}@media(max-width: 700px){.top-container.svelte-2fjz98.svelte-2fjz98{justify-content:center}.menu-large-screens.svelte-2fjz98.svelte-2fjz98{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}
<div class="${"container svelte-2fjz98"}"><div class="${"top-container svelte-2fjz98"}"><h1 class="${"site-title svelte-2fjz98"}"><a href="${"/"}">GIRLPOWER</a></h1>
		<nav class="${"menu-large-screens svelte-2fjz98"}"><ul class="${"svelte-2fjz98"}"><li class="${"svelte-2fjz98"}"><a href="${"dating"}">Dating</a>
					<a href="${"movies"}">Movies</a>
					<a href="${"tv"}">TV</a>
					<a href="${"relationships"}">Relationships</a></li></ul></nav></div>
</div>`;
});
const global = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1udg5sc.svelte-1udg5sc{padding:1em;display:flex;justify-content:space-between;background-color:var(--secondary)}input.svelte-1udg5sc.svelte-1udg5sc{width:100%}.search-icon.svelte-1udg5sc.svelte-1udg5sc{color:var(--primary);cursor:pointer}.search-box.svelte-1udg5sc.svelte-1udg5sc{border:none;padding:0.5rem;border-radius:5px}.search-box.svelte-1udg5sc.svelte-1udg5sc::placeholder{font-size:1rem}.search-container.svelte-1udg5sc.svelte-1udg5sc{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:1em;border-radius:10px;background-color:var(--accent);box-shadow:10px 10px var(--dark-text);max-width:900px;z-index:1;color:white;text-align:center}.search-results.svelte-1udg5sc.svelte-1udg5sc{display:flex;align-items:center;justify-content:center;font-size:1rem;margin:1em 0}.search-results.svelte-1udg5sc .svelte-1udg5sc{margin-left:0.3em;color:white;margin-bottom:0.3em;font-weight:bold}.search-box.svelte-1udg5sc.svelte-1udg5sc:focus{outline:none}",
  map: null
};
async function load({ fetch }) {
  const POSTS = await fetch("../api/posts.json");
  const ALL_POSTS = await POSTS.json();
  return { props: { posts: ALL_POSTS } };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  const OPEN_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>`;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<header class="${"svelte-1udg5sc"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<span class="${"search-icon svelte-1udg5sc"}"><!-- HTML_TAG_START -->${OPEN_SEARCH_ICON}<!-- HTML_TAG_END --></span>
	${``}</header>
<main><article id="${"body"}">${slots.default ? slots.default({}) : ``}</article></main>
<footer></footer>`;
});
export {
  _layout as default,
  load
};
