import{s as y,n as o}from"../chunks/scheduler.BRW4IjsR.js";import{S as f,i as m,s as _,H as i,x as l,k as d,d as p,f as h,o as u,g as c}from"../chunks/index.yRNBcVz4.js";const k=`<pre><code><span id="lf-type-yes_or_no" class="constant lf-type-constant">yes_or_no</span> : <span class="keyword keyword-type">type</span>.
<span id="lf-term-yes" class="constant lf-term-constant">yes</span> : <span class="constant lf-type-constant"><a href="#lf-type-yes_or_no">yes_or_no</a></span>.
<span id="lf-term-no" class="constant lf-term-constant">no</span> : <span class="constant lf-type-constant"><a href="#lf-type-yes_or_no">yes_or_no</a></span>.

<span class="keyword keyword-rec">rec</span> <span id="theorem-andalso" class="constant computation-program">andalso</span> : ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-yes_or_no">yes_or_no</a></span>) → ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-yes_or_no">yes_or_no</a></span>) → ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-yes_or_no">yes_or_no</a></span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">x</span> ⇒ <span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">y</span> ⇒ <span class="keyword keyword-case">case</span> <span class="variable computation-variable">x</span> <span class="keyword keyword-of">of</span>
              | [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-no">no</a></span>] ⇒ [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-no">no</a></span>]
              | [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-yes">yes</a></span>] ⇒ <span class="variable computation-variable">y</span>;</code></pre>
`;function w(r){let s,n,t;return{c(){s=_(),n=new i(!1),t=l(),this.h()},l(a){d("svelte-1e9kxup",document.head).forEach(p),s=h(a),n=u(a,!1),t=l(),this.h()},h(){document.title="yn Example",n.a=t},m(a,e){c(a,s,e),n.m(k,a,e),c(a,t,e)},p:o,i:o,o,d(a){a&&(p(s),p(t),n.d())}}}class x extends f{constructor(s){super(),m(this,s,null,w,y,{})}}export{x as component};
