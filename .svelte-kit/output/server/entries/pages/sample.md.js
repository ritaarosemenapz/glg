import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-27acdd93.js";
import _layout_article from "./layouts/__layout-article.svelte.js";
const metadata = {
  "layout": "article",
  "title": "X Things You Need to Stop Asking Permission For",
  "cover": "https://images.unsplash.com/photo-1659394754299-26e8172a1d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "category": "tv",
  "date": "2022-12-10",
  "summary": "Just stop.",
  "photoCredit": 'Photo by <a href="https://unsplash.com/@minusculemarie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marie-Mich\xE8le Bouchard</a> on <a href="https://unsplash.com/@ritaarosemenapz/likes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  "photoAlt": "PHOTO"
};
const Sample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(_layout_article, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>asdasdasdasdadasd</p>`;
    }
  })}`;
});
export {
  Sample as default,
  metadata
};
