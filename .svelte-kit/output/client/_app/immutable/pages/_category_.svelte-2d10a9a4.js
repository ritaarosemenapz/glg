import{S as Q,i as W,s as J,a as I,l as E,u as y,V as K,h as m,c as j,m as S,p as O,v as k,q as d,b as G,F as h,w as U,f as D,n as C,Q as X,R as Y,e as w,H as x,U as $}from"../chunks/index-d750e342.js";import{a as ee}from"../chunks/index-1501cbe8.js";function N(f,t,e){const l=f.slice();return l[2]=t[e],l}function z(f){let t,e,l,r,c,u,v;return{c(){t=E("div"),e=E("h3"),l=y("Ups, seems like there are not posts in here yet..."),r=I(),c=E("img"),v=I(),this.h()},l(n){t=S(n,"DIV",{class:!0});var s=O(t);e=S(s,"H3",{});var o=O(e);l=k(o,"Ups, seems like there are not posts in here yet..."),o.forEach(m),r=j(s),c=S(s,"IMG",{class:!0,src:!0,alt:!0}),v=j(s),s.forEach(m),this.h()},h(){d(c,"class","no-posts-img svelte-1tgjgth"),Y(c.src,u="https://media2.giphy.com/media/YrHW5dZMvtokZBuI2b/giphy.gif?cid=ecf05e47b6prmhfnjcuel39i7z0wktpx4f80v496vcdztnix&rid=giphy.gif&ct=g")||d(c,"src",u),d(c,"alt",""),d(t,"class","no-posts-message")},m(n,s){G(n,t,s),h(t,e),h(e,l),h(t,r),h(t,c),h(t,v)},p:C,d(n){n&&m(t)}}}function B(f){let t,e,l,r,c,u,v,n=f[2].meta.title+"",s,o,a,_=f[2].meta.summary+"",i,R,g,F,b,q,A;return{c(){t=E("div"),e=E("img"),r=I(),c=E("div"),u=E("div"),v=E("h3"),s=y(n),o=I(),a=E("p"),i=y(_),R=I(),g=E("a"),F=y("Read More"),q=I(),this.h()},l(T){t=S(T,"DIV",{class:!0});var p=O(t);e=S(p,"IMG",{class:!0,src:!0,alt:!0}),r=j(p),c=S(p,"DIV",{class:!0});var L=O(c);u=S(L,"DIV",{class:!0});var P=O(u);v=S(P,"H3",{class:!0});var H=O(v);s=k(H,n),H.forEach(m),o=j(P),a=S(P,"P",{class:!0});var M=O(a);i=k(M,_),M.forEach(m),P.forEach(m),R=j(L),g=S(L,"A",{class:!0,href:!0});var V=O(g);F=k(V,"Read More"),V.forEach(m),L.forEach(m),q=j(p),p.forEach(m),this.h()},h(){d(e,"class","post-cover svelte-1tgjgth"),Y(e.src,l=f[2].meta.cover)||d(e,"src",l),d(e,"alt",""),d(v,"class","svelte-1tgjgth"),d(a,"class","summary svelte-1tgjgth"),d(u,"class","svelte-1tgjgth"),d(g,"class","read-more-tag svelte-1tgjgth"),d(g,"href",b=f[2].path.replace(".md","")),d(c,"class","card-info svelte-1tgjgth"),d(t,"class","card svelte-1tgjgth")},m(T,p){G(T,t,p),h(t,e),h(t,r),h(t,c),h(c,u),h(u,v),h(v,s),h(u,o),h(u,a),h(a,i),h(c,R),h(c,g),h(g,F),h(t,q)},p(T,p){p&1&&!Y(e.src,l=T[2].meta.cover)&&d(e,"src",l),p&1&&n!==(n=T[2].meta.title+"")&&U(s,n),p&1&&_!==(_=T[2].meta.summary+"")&&U(i,_),p&1&&b!==(b=T[2].path.replace(".md",""))&&d(g,"href",b)},i(T){A||x(()=>{A=$(t,ee,{duration:400}),A.start()})},o:C,d(T){T&&m(t)}}}function Z(f){let t,e=f[2]&&B(f);return{c(){e&&e.c(),t=w()},l(l){e&&e.l(l),t=w()},m(l,r){e&&e.m(l,r),G(l,t,r)},p(l,r){l[2]?e?(e.p(l,r),r&1&&D(e,1)):(e=B(l),e.c(),D(e,1),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i(l){D(e)},o:C,d(l){e&&e.d(l),l&&m(t)}}}function te(f){let t,e,l,r,c,u,v;document.title=t=f[1].toUpperCase()+" | GLG";let n=f[0],s=[];for(let a=0;a<n.length;a+=1)s[a]=Z(N(f,n,a));let o=null;return n.length||(o=z()),{c(){e=I(),l=E("section"),r=E("h2"),c=y("Latest articles on "),u=y(f[1]),v=I();for(let a=0;a<s.length;a+=1)s[a].c();o&&o.c(),this.h()},l(a){K('[data-svelte="svelte-1x0qqe6"]',document.head).forEach(m),e=j(a),l=S(a,"SECTION",{class:!0});var i=O(l);r=S(i,"H2",{});var R=O(r);c=k(R,"Latest articles on "),u=k(R,f[1]),R.forEach(m),v=j(i);for(let g=0;g<s.length;g+=1)s[g].l(i);o&&o.l(i),i.forEach(m),this.h()},h(){d(l,"class","container svelte-1tgjgth")},m(a,_){G(a,e,_),G(a,l,_),h(l,r),h(r,c),h(r,u),h(l,v);for(let i=0;i<s.length;i+=1)s[i].m(l,null);o&&o.m(l,null)},p(a,[_]){if(_&2&&t!==(t=a[1].toUpperCase()+" | GLG")&&(document.title=t),_&2&&U(u,a[1]),_&1){n=a[0];let i;for(i=0;i<n.length;i+=1){const R=N(a,n,i);s[i]?(s[i].p(R,_),D(s[i],1)):(s[i]=Z(R),s[i].c(),D(s[i],1),s[i].m(l,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length,!n.length&&o?o.p(a,_):n.length?o&&(o.d(1),o=null):(o=z(),o.c(),o.m(l,null))}},i(a){for(let _=0;_<n.length;_+=1)D(s[_])},o:C,d(a){a&&m(e),a&&m(l),X(s,a),o&&o.d()}}}const ie=async({fetch:f,params:t})=>{const l=await(await f("api/posts.json")).json(),r=t.category;return{props:{FILTERED_POSTS:l.filter(u=>u.meta.category.includes(r)),CATEGORY:r}}};function le(f,t,e){let{FILTERED_POSTS:l}=t,{CATEGORY:r}=t;return f.$$set=c=>{"FILTERED_POSTS"in c&&e(0,l=c.FILTERED_POSTS),"CATEGORY"in c&&e(1,r=c.CATEGORY)},[l,r]}class re extends Q{constructor(t){super(),W(this,t,le,te,J,{FILTERED_POSTS:0,CATEGORY:1})}}export{re as default,ie as load};