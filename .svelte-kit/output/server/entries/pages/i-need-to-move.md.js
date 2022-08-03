import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
import _layout_article from "./layouts/__layout-article.svelte.js";
const metadata = {
  "layout": "article",
  "title": "I need to move",
  "category": "relationships",
  "cover": "https://images.unsplash.com/photo-1609542334025-778f9093a234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  "date": "2023-07-27",
  "summary": "Here comes the sun",
  "photoCredit": "https://unsplash.com/@cowomen",
  "photoAlt": "Photo of woman"
};
const I_need_to_move = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(_layout_article, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Massa tempor nec feugiat nisl pretium fusce id velit. Purus non enim praesent elementum facilisis. Neque egestas congue quisque egestas diam in. Fusce id velit ut tortor pretium. Risus nullam eget felis eget nunc lobortis. Non arcu risus quis varius quam quisque. Dignissim convallis aenean et tortor at risus viverra adipiscing. Sit amet commodo nulla facilisi nullam vehicula ipsum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Ligula ullamcorper malesuada proin libero. Orci eu lobortis elementum nibh tellus molestie.</p>`;
    }
  })}`;
});
export {
  I_need_to_move as default,
  metadata
};