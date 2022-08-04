import { c as create_ssr_component, a as add_attribute } from "./index-511472e1.js";
const ReadMoreTag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".read-more-tag.svelte-1wclngl{text-transform:uppercase;color:inherit;border-bottom:2px solid var(--dark-text);font-weight:bold}.read-more-tag.svelte-1wclngl:hover{color:var(--dark-text)}",
  map: null
};
const ReadMoreTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css);
  return `<a class="${"read-more-tag svelte-1wclngl"}"${add_attribute("href", path, 0)}>Read more</a>`;
});
export {
  ReadMoreTag as R
};
