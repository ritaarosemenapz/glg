function S(){}const Y=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function K(){return Object.create(null)}function w(t){t.forEach(Z)}function F(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function zt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function mt(t){return Object.keys(t).length===0}function Ft(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,c){if(r){const s=tt(e,n,i,c);t.p(s,r)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):S;const b=new Set;function it(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&G(it)}function rt(t){let e;return b.size===0&&G(it),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let D=!1;function pt(){D=!0}function yt(){D=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:gt(1,r,a=>e[n[a]].claim_order,u))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,r=Math.max(f,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<c.length&&s[l].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(s[l],_)}}function $t(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=I("style");return wt(st(t),e),e.sheet}function wt(t,e){$t(t.head||t,e)}function vt(t,e){if(D){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){D&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Qt(){return W(" ")}function Ut(){return W("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function lt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){lt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Tt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Yt(t,e,n){return Tt(t,e,n,I)}function St(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function Zt(t){return St(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function te(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);lt(t);const r=t.splice(n,i-n+1);R(r[0]),R(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(c,e)}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ne(t,e){t.value=e==null?"":e}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function re(t,e=document.body){return Array.from(e.querySelectorAll(t))}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Nt(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}class U extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}const q=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:bt(e),rules:{}};return q.set(t,n),n}function P(t,e,n,i,r,c,s,o=0){const l=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);u+=m*100+`%{${s(g,1-g)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Mt(_)}_${o}`,a=st(t),{stylesheet:h,rules:d}=q.get(a)||Ht(a,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,L+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Rt())}function Rt(){G(()=>{L||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let k;function A(t){k=t}function J(){if(!k)throw new Error("Function called outside component initialization");return k}function se(t){J().$$.on_mount.push(t)}function le(t){J().$$.after_update.push(t)}function ce(t,e){return J().$$.context.set(t,e),e}const E=[],V=[],M=[],X=[],ot=Promise.resolve();let z=!1;function ut(){z||(z=!0,ot.then(at))}function oe(){return ut(),ot}function T(t){M.push(t)}const O=new Set;let j=0;function at(){const t=k;do{for(;j<E.length;){const e=E[j];j++,A(e),qt(e.$$)}for(A(null),E.length=0,j=0;V.length;)V.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];O.has(n)||(O.add(n),n())}M.length=0}while(E.length);for(;X.length;)X.pop()();z=!1,O.clear(),A(t)}function qt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let v;function ft(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function N(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const H=new Set;let y;function ue(){y={r:0,c:[],p:y}}function ae(){y.r||w(y.c),y=y.p}function Lt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),y.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const _t={duration:0};function _e(t,e,n){let i=e(t,n),r=!1,c,s,o=0;function l(){c&&B(t,c)}function u(){const{delay:f=0,duration:a=300,easing:h=Y,tick:d=S,css:p}=i||_t;p&&(c=P(t,0,1,a,f,h,p,o++)),d(0,1);const m=nt()+f,g=m+a;s&&s.abort(),r=!0,T(()=>N(t,!0,"start")),s=rt(x=>{if(r){if(x>=g)return d(1,0),N(t,!0,"end"),l(),r=!1;if(x>=m){const $=h((x-m)/a);d($,1-$)}}return r})}let _=!1;return{start(){_||(_=!0,B(t),F(i)?(i=i(),ft().then(u)):u())},invalidate(){_=!1},end(){r&&(l(),r=!1)}}}function de(t,e,n,i){let r=e(t,n),c=i?0:1,s=null,o=null,l=null;function u(){l&&B(t,l)}function _(a,h){const d=a.b-c;return h*=Math.abs(d),{a:c,b:a.b,d,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:d=300,easing:p=Y,tick:m=S,css:g}=r||_t,x={start:nt()+h,b:a};a||(x.group=y,y.r+=1),s||o?o=x:(g&&(u(),l=P(t,c,a,d,h,p,g)),a&&m(0,1),s=_(x,d),T(()=>N(t,a,"start")),rt($=>{if(o&&$>o.start&&(s=_(o,d),o=null,N(t,s.b,"start"),g&&(u(),l=P(t,c,s.b,s.duration,0,p,r.css))),s){if($>=s.end)m(c=s.b,1-c),N(t,s.b,"end"),o||(s.b?u():--s.group.r||w(s.group.c)),s=null;else if($>=s.start){const dt=$-s.start;c=s.a+s.d*p(dt/s.duration),m(c,1-c)}}return!!(s||o)}))}return{run(a){F(r)?ft().then(()=>{r=r(),f(a)}):f(a)},end(){u(),s=o=null}}}function he(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],o=e[c];if(o){for(const l in s)l in o||(i[l]=1);for(const l in o)r[l]||(n[l]=o[l],r[l]=1);t[c]=o}else for(const l in s)r[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||T(()=>{const l=c.map(Z).filter(F);s?s.push(...l):w(l),t.$$.on_mount=[]}),o.forEach(T)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(E.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,c,s,o=[-1]){const l=k;A(t);const u=t.$$={fragment:null,ctx:null,props:c,update:S,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...h)=>{const d=h.length?h[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),_&&Pt(t,f)),a}):[],u.update(),_=!0,w(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){pt();const f=kt(e.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();e.intro&&Lt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),yt(),at()}A(l)}class xe{$destroy(){Ot(this,1),this.$destroy=S}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as A,me as B,Ot as C,ht as D,oe as E,te as F,vt as G,U as H,Vt as I,T as J,de as K,w as L,Ft as M,It as N,Wt as O,Gt as P,ne as Q,Kt as R,xe as S,Y as T,zt as U,_e as V,re as W,Jt as X,Qt as a,At as b,Zt as c,ae as d,Ut as e,Lt as f,ue as g,R as h,ge as i,ce as j,le as k,I as l,Yt as m,S as n,se as o,kt as p,Xt as q,ie as r,Bt as s,fe as t,W as u,St as v,ee as w,pe as x,ye as y,Dt as z};
