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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require("../../_app/immutable/chunks/index-511472e1.js");
var import_ReadMoreTag_72af3152 = require("../../_app/immutable/chunks/ReadMoreTag-72af3152.js");
const Card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".card.svelte-zl4blg.svelte-zl4blg{display:flex;justify-content:center;flex-flow:row wrap;max-width:400px;border:5px solid var(--dark-text);box-shadow:10px 10px var(--secondary);border-radius:5px;margin-bottom:2rem}.post-title.svelte-zl4blg a.svelte-zl4blg{color:var(--dark-text)}.post-title.svelte-zl4blg a.svelte-zl4blg:hover{color:var(--primary)}.post-cover.svelte-zl4blg.svelte-zl4blg{object-fit:cover;width:500px;height:200px}.card-content.svelte-zl4blg.svelte-zl4blg{padding:1em}img.svelte-zl4blg.svelte-zl4blg:hover{filter:hue-rotate(-150deg);clip-path:polygon(\n			50% 0%,\n			94% 2%,\n			96% 18%,\n			100% 70%,\n			95% 98%,\n			50% 100%,\n			24% 98%,\n			3% 95%,\n			2% 34%,\n			14% 5%\n		)}",
  map: null
};
const Card = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let { title } = $$props;
  let { category } = $$props;
  let { date } = $$props;
  let { path } = $$props;
  let { alt } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$3);
  return `<article class="${"card svelte-zl4blg"}"><img class="${"post-cover svelte-zl4blg"}"${(0, import_index_511472e1.a)("src", source, 0)}${(0, import_index_511472e1.a)("alt", alt, 0)}>
	<div class="${"card-content svelte-zl4blg"}"><a class="${"category-badge"}"${(0, import_index_511472e1.a)("href", category.toLowerCase(), 0)}>${(0, import_index_511472e1.e)(category)}</a>
		<h3 class="${"post-title svelte-zl4blg"}"><a${(0, import_index_511472e1.a)("href", path, 0)} class="${"svelte-zl4blg"}">${(0, import_index_511472e1.e)(title)}</a></h3>
		<p class="${"post-date"}">${(0, import_index_511472e1.e)(new Date(date).toDateString())}</p>
		${(0, import_index_511472e1.v)(import_ReadMoreTag_72af3152.R, "ReadMoreTag").$$render($$result, { path }, {}, {})}</div>
</article>`;
});
const FEM_QUOTES = [
  {
    "text": "You educate a man; you educate a man. You educate a woman; you educate a generation.",
    "author": "Brigham Young"
  },
  {
    "text": "When a man gives his opinion, he's a man. When a woman gives her opinion, she's a bitch.",
    "author": "Bette Davis"
  },
  {
    "text": "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
    "author": "Jane Austen"
  },
  {
    "text": "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself.",
    "author": "Simone de Beauvoir"
  },
  {
    "text": "I hate men who are afraid of women's strength.",
    "author": "Ana\xEFs Nin"
  },
  {
    "text": "It's not my responsibility to be beautiful. I'm not alive for that purpose. My existence is not about how desirable you find me.",
    "author": "Warsan Shire"
  },
  {
    "text": "The thing women have yet to learn is nobody gives you power. You just take it. ",
    "author": "Roseanne Barr"
  },
  {
    "text": "No woman gets an orgasm from shining the kitchen floor.",
    "author": "Betty Friedan"
  },
  {
    "text": "He - and if there is a God, I am convinced he is a he, because no woman could or would ever fuck things up this badly.",
    "author": "George Carlin"
  },
  {
    "text": "Cut the ending. Revise the script. The man of her dreams is a girl.",
    "author": "Julie Anne Peters"
  }
];
const DailyQuote_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-l4ij51{display:flex;flex-direction:column}.daily-quote.svelte-l4ij51{margin:0;padding:1em 2em;font-family:'Arial';font-weight:bold;color:white;font-size:1.8rem}.author.svelte-l4ij51{color:var(--secondary)}section.svelte-l4ij51{align-items:center;background-color:var(--dark-text);padding:0}",
  map: null
};
const DailyQuote = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let randomIndex = Math.floor(Math.random() * FEM_QUOTES.length);
  let randomQuote = FEM_QUOTES[randomIndex];
  $$result.css.add(css$2);
  return `<section class="${"container svelte-l4ij51"}">${randomQuote ? `<blockquote class="${"daily-quote svelte-l4ij51"}"><p>&quot;${(0, import_index_511472e1.e)(randomQuote.text)}&quot;</p>
			<p class="${"author svelte-l4ij51"}">\u2013 ${(0, import_index_511472e1.e)(randomQuote.author)}</p></blockquote>` : `<blockquote>&quot;Women are strong as hell.&quot;</blockquote>`}
</section>`;
});
const FeaturedPost_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-8s3qpb.svelte-8s3qpb{display:grid;grid-template-columns:auto auto;justify-content:space-between;background-color:var(--secondary);align-items:center;column-gap:2em}img.svelte-8s3qpb.svelte-8s3qpb{order:1;width:500px;height:500px;object-fit:cover}.text-container.svelte-8s3qpb.svelte-8s3qpb{margin-left:2em;max-width:800px}.post-title.svelte-8s3qpb a.svelte-8s3qpb{font-family:var(--font-headings)}.post-title.svelte-8s3qpb a.svelte-8s3qpb:hover{color:var(--dark-text)}@media(max-width: 789px){img.svelte-8s3qpb.svelte-8s3qpb{width:400px;height:400px}}",
  map: null
};
const FeaturedPost = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { cover } = $$props;
  let { category } = $$props;
  let { path } = $$props;
  let { date } = $$props;
  let { alt } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$1);
  return `<section class="${"svelte-8s3qpb"}"><img${(0, import_index_511472e1.a)("src", cover, 0)}${(0, import_index_511472e1.a)("alt", alt, 0)} class="${"svelte-8s3qpb"}">
	<div class="${"text-container svelte-8s3qpb"}"><p class="${"category-badge"}">${(0, import_index_511472e1.e)(category)}</p>
		<h2 class="${"post-title svelte-8s3qpb"}"><a${(0, import_index_511472e1.a)("href", path, 0)} class="${"svelte-8s3qpb"}">${(0, import_index_511472e1.e)(title)}</a></h2>
		<p class="${"post-date"}">${(0, import_index_511472e1.e)(date)}</p>
		${(0, import_index_511472e1.v)(import_ReadMoreTag_72af3152.R, "ReadMoreTag").$$render($$result, { path }, {}, {})}</div>
</section>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-grid.svelte-1ha7gnm{display:grid;grid-template-columns:repeat(auto-fit, minmax(352px, 1fr));justify-items:center;column-gap:2em;padding:1em}",
  map: null
};
async function load({ fetch }) {
  const POSTS = await fetch("./api/posts.json");
  const ALL_POSTS = await POSTS.json();
  return { props: { posts: ALL_POSTS } };
}
const Routes = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>GirlsLikeGirls</title>`, ""}`, ""}

<main>${(0, import_index_511472e1.v)(FeaturedPost, "FeaturedPost").$$render(
    $$result,
    {
      path: posts[0].path,
      title: posts[0].meta.title,
      alt: posts[0].meta.alt,
      cover: posts[0].meta.cover,
      category: posts[0].meta.category,
      date: new Date(posts[0].meta.date).toDateString()
    },
    {},
    {}
  )}
	${(0, import_index_511472e1.v)(DailyQuote, "DailyQuote").$$render($$result, {}, {}, {})}
	<section class="${"post-grid svelte-1ha7gnm"}">${(0, import_index_511472e1.b)(posts, (post) => {
    return `${posts.indexOf(post) !== 0 ? `${(0, import_index_511472e1.v)(Card, "Card").$$render(
      $$result,
      {
        source: post.meta.cover,
        title: post.meta.title,
        category: post.meta.category,
        date: post.meta.date,
        path: post.path,
        alt: post.meta.alt
      },
      {},
      {}
    )}` : ``}`;
  })}</section>
</main>`;
});
