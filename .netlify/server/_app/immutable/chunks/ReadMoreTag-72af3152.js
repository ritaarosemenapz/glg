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
  R: () => ReadMoreTag
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require("./index-511472e1.js");
const ReadMoreTag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".read-more-tag.svelte-1wclngl{text-transform:uppercase;color:inherit;border-bottom:2px solid var(--dark-text);font-weight:bold}.read-more-tag.svelte-1wclngl:hover{color:var(--dark-text)}",
  map: null
};
const ReadMoreTag = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css);
  return `<a class="${"read-more-tag svelte-1wclngl"}"${(0, import_index_511472e1.a)("href", path, 0)}>Read more</a>`;
});
