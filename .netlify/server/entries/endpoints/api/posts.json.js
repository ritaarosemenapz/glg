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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  GET: () => GET
});
module.exports = __toCommonJS(stdin_exports);
async function GET() {
  const ALL_POSTS = Object.assign({ "../comes-the-sun.md": () => Promise.resolve().then(() => __toESM(require("../../pages/comes-the-sun.md.js"))), "../sample.md": () => Promise.resolve().then(() => __toESM(require("../../pages/sample.md.js"))) });
  const ITERABLE_FILES = Object.entries(ALL_POSTS);
  const POSTS = await Promise.all(ITERABLE_FILES.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const postpath = path.slice(2, -3);
    return {
      meta: metadata,
      path: postpath
    };
  }));
  const SORTED_POSTS = POSTS.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return {
    body: SORTED_POSTS
  };
}
