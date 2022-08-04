export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9153edfa.js","imports":["_app/immutable/start-9153edfa.js","_app/immutable/chunks/index-b4376cc8.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "comes-the-sun",
				pattern: /^\/comes-the-sun\/?$/,
				names: [],
				types: [],
				path: "/comes-the-sun",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "sample",
				pattern: /^\/sample\/?$/,
				names: [],
				types: [],
				path: "/sample",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/posts.json",
				pattern: /^\/api\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/posts.json.js')
			},
			{
				type: 'page',
				id: "[category]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["category"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
