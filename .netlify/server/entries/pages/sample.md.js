var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Sample,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require("../../_app/immutable/chunks/index-511472e1.js");
var import_layout_article_svelte = __toESM(require("./layouts/__layout-article.svelte.js"));
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
const Sample = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_511472e1.v)(import_layout_article_svelte.default, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>asdasdasdasdadasd</p>`;
    }
  })}`;
});
