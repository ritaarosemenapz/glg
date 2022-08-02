import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from "../../_app/immutable/chunks/index-511472e1.js";
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
  code: "blockquote.svelte-c7b0d6.svelte-c7b0d6{font-family:Arial, Helvetica, sans-serif;background:-webkit-linear-gradient(#3f5efb, #fc466b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0;padding:1em}section.svelte-c7b0d6.svelte-c7b0d6{align-items:center}.social-icons.svelte-c7b0d6.svelte-c7b0d6{padding:0 1em}.social-icons.svelte-c7b0d6 ul.svelte-c7b0d6{padding:0;margin:0;display:flex;justify-content:flex-end}.social-icons.svelte-c7b0d6 li.svelte-c7b0d6{list-style:none;border-bottom:3px solid var(--dark-text)}",
  map: null
};
const DailyQuote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomIndex = Math.floor(Math.random() * FEM_QUOTES.length);
  let randomQuote = FEM_QUOTES[randomIndex];
  const TWITTER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"></path></svg>`;
  const FACEBOOK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.8" d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"></path></svg>`;
  const TUMBLR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></path><path fill="#fff" d="M15 22V17H20V14L26 12V17H31V22H26V29C26 29 26 30.5 28 31C30 31.5 33 30 33 30L31 36H26C22.5 36 20 32.5 20 30V22H15Z"></path></g></svg>`;
  $$result.css.add(css$2);
  return `<section class="${"svelte-c7b0d6"}"><blockquote class="${"svelte-c7b0d6"}">${randomQuote ? `&quot;${escape(randomQuote.text)}&quot; - ${escape(randomQuote.author)}` : `<p>&quot;Women are strong as hell.&quot;</p>`}</blockquote>
	<div class="${"social-icons svelte-c7b0d6"}"><ul class="${"svelte-c7b0d6"}"><li class="${"svelte-c7b0d6"}"><a href="${""}"><!-- HTML_TAG_START -->${TWITTER_ICON}<!-- HTML_TAG_END --></a></li>
			<li class="${"svelte-c7b0d6"}"><a href="${""}"><!-- HTML_TAG_START -->${FACEBOOK_ICON}<!-- HTML_TAG_END --></a></li>
			<li class="${"svelte-c7b0d6"}"><a href="${""}"><!-- HTML_TAG_START -->${TUMBLR_ICON}<!-- HTML_TAG_END --></a></li></ul></div>
</section>`;
});
const FeaturedPost_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-x5hosu{display:grid;background-color:var(--primary);grid-template-columns:auto auto;justify-content:space-between;align-items:center;column-gap:2em}img.svelte-x5hosu{order:1;width:500px;height:500px;object-fit:cover}.category-badge.svelte-x5hosu{color:white}.text-container.svelte-x5hosu{margin-left:2em;color:white}.post-title.svelte-x5hosu{font-size:2rem;font-family:var(--font-headings);color:white}a.svelte-x5hosu{color:white}a.svelte-x5hosu:hover{color:var(--dark-text)}@media(max-width: 789px){img.svelte-x5hosu{width:400px;height:400px}}",
  map: null
};
const FeaturedPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { summary } = $$props;
  let { cover } = $$props;
  let { category } = $$props;
  let { path } = $$props;
  let { date } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css$1);
  return `<section class="${"svelte-x5hosu"}">
	<img${add_attribute("src", cover, 0)} alt="${"#"}" class="${"svelte-x5hosu"}">
	
	<div class="${"text-container svelte-x5hosu"}"><p class="${"category-badge svelte-x5hosu"}">${escape(category)}</p>
		<a class="${"post-title svelte-x5hosu"}"${add_attribute("href", path, 0)}>${escape(title)}</a>
		<p class="${"post-summary"}">${escape(summary)}</p>
		<p>${escape(date)}</p>
		<a class="${"read-more-tag svelte-x5hosu"}"${add_attribute("href", path, 0)}>Read More</a></div>
</section>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-grid.svelte-lrgik1{display:grid;grid-template-columns:repeat(auto-fit, minmax(352px, 1fr));justify-items:center;column-gap:2em;align-items:stretch}article.svelte-lrgik1{display:flex;flex-direction:column;justify-content:baseline;align-items:flex-start;width:400px;gap:2em;margin:2em;padding:1em;border-left:4px solid black}span.svelte-lrgik1{padding:1em;margin:0}h2.svelte-lrgik1{text-transform:uppercase;margin:0}a.svelte-lrgik1{text-transform:uppercase}img.svelte-lrgik1:hover{filter:hue-rotate(-150deg);clip-path:polygon(\n			50% 0%,\n			94% 2%,\n			96% 18%,\n			100% 70%,\n			95% 98%,\n			50% 100%,\n			24% 98%,\n			3% 95%,\n			2% 34%,\n			14% 5%\n		)}.quote.svelte-lrgik1{padding:2em}",
  map: null
};
async function load({ fetch }) {
  const POSTS = await fetch("./api/posts.json");
  const ALL_POSTS = await POSTS.json();
  return { props: { posts: ALL_POSTS } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>GirlsLikeGirls</title>`, ""}`, ""}

<main>${validate_component(FeaturedPost, "FeaturedPost").$$render($$result, {
    path: posts[0].path,
    title: posts[0].meta.title,
    summary: posts[0].meta.summary,
    cover: posts[0].meta.cover,
    category: posts[0].meta.category,
    date: new Date(posts[0].meta.date).toDateString()
  }, {}, {})}
	<section class="${"quote svelte-lrgik1"}">${validate_component(DailyQuote, "DailyQuote").$$render($$result, {}, {}, {})}</section>
	<section class="${"post-grid svelte-lrgik1"}">${each(posts, (post) => {
    return `${posts.indexOf(post) !== 0 ? `<article class="${"svelte-lrgik1"}"><img${add_attribute("src", post.meta.cover, 0)}${add_attribute("alt", post.title, 0)} class="${"svelte-lrgik1"}">
					<span class="${"svelte-lrgik1"}"><div><a class="${"category-badge svelte-lrgik1"}"${add_attribute("href", `${post.meta.category.toLowerCase()}`, 0)}>${escape(post.meta.category)}
							</a></div>
						<h2 class="${"svelte-lrgik1"}">${escape(post.meta.title)}</h2>
						<p>${escape(new Date(post.meta.date).toDateString())}</p>
						<a class="${"read-more-tag svelte-lrgik1"}"${add_attribute("href", post.path, 0)}>Read More</a></span>
				</article>` : ``}`;
  })}</section>
</main>`;
});
export {
  Routes as default,
  load
};
