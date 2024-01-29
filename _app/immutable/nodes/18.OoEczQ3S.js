import{s as f,n as e}from"../chunks/scheduler.BRW4IjsR.js";import{S as i,i as v,s as m,H as b,x as r,k as y,d as l,f as d,o as h,g as c}from"../chunks/index.yRNBcVz4.js";const _=`<pre><code><span id="lf-type-tp" class="constant lf-type-constant">tp</span> : <span class="keyword keyword-type">type</span>.
<span id="lf-type-tm" class="constant lf-type-constant">tm</span> : <span class="keyword keyword-type">type</span>.</code></pre>

<div class="documentation"><p>Types</p></div>

<pre><code><span id="lf-term-arr" class="constant lf-term-constant">arr</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>.</code></pre>

<div class="documentation"><p>Terms</p></div>

<pre><code><span id="lf-term-app" class="constant lf-term-constant">app</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>.
<span id="lf-term-lam" class="constant lf-term-constant">lam</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → (<span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>) → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>.</code></pre>

<div class="documentation"><p>Values</p></div>

<pre><code><span id="lf-type-value" class="constant lf-type-constant">value</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="keyword keyword-type">type</span>.
<span id="lf-type-step" class="constant lf-type-constant">step</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="keyword keyword-type">type</span>.
<span id="lf-term-s_app1" class="constant lf-term-constant">s_app1</span> : <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> <span class="variable lf-variable">E1</span> <span class="variable lf-variable">E1'</span> → <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">E1</span> <span class="variable lf-variable">E2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">E1'</span> <span class="variable lf-variable">E2</span>).
<span id="lf-term-s_app2" class="constant lf-term-constant">s_app2</span> : <span class="constant lf-type-constant"><a href="#lf-type-value">value</a></span> <span class="variable lf-variable">E1</span> → <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> <span class="variable lf-variable">E2</span> <span class="variable lf-variable">E2'</span> → <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">E1</span> <span class="variable lf-variable">E2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">E1</span> <span class="variable lf-variable">E2'</span>).
<span id="lf-term-s_app3" class="constant lf-term-constant">s_app3</span> : <span class="constant lf-type-constant"><a href="#lf-type-value">value</a></span> <span class="variable lf-variable">E2</span> → <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> <span class="variable lf-variable">T</span> (\\x. <span class="variable lf-variable">E1</span> <span class="variable lf-variable">x</span>)) <span class="variable lf-variable">E2</span>) (<span class="variable lf-variable">E1</span> <span class="variable lf-variable">E2</span>).</code></pre>

<div class="documentation"><p>Typing</p></div>

<pre><code><span id="lf-type-has_type" class="constant lf-type-constant">has_type</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="keyword keyword-type">type</span>.
<span id="lf-term-is_app" class="constant lf-term-constant">is_app</span> : <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> <span class="variable lf-variable">E1</span> (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>) → <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> <span class="variable lf-variable">E2</span> <span class="variable lf-variable">T1</span> → <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">E1</span> <span class="variable lf-variable">E2</span>) <span class="variable lf-variable">T2</span>.
<span id="lf-term-is_lam" class="constant lf-term-constant">is_lam</span> :
  ({x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">T1</span> → <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> (<span class="variable lf-variable">E</span> <span class="variable lf-variable">x</span>) <span class="variable lf-variable">T2</span>) →
    <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> <span class="variable lf-variable">T1</span> (\\x. <span class="variable lf-variable">E</span> <span class="variable lf-variable">x</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>).</code></pre>

<div class="documentation"><p>Preservation</p></div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-pres" class="constant computation-program">pres</span> : ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> <span class="variable meta-variable">E</span> <span class="variable meta-variable">T</span>) → ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-step">step</a></span> <span class="variable meta-variable">E</span> <span class="variable meta-variable">E'</span>) → ( ⊢ <span class="constant lf-type-constant"><a href="#lf-type-has_type">has_type</a></span> <span class="variable meta-variable">E'</span> <span class="variable meta-variable">T</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d</span> ⇒ <span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">s</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">s</span> <span class="keyword keyword-of">of</span>
  | [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-s_app1">s_app1</a></span> <span class="variable meta-variable">S1</span>] ⇒ <span class="keyword keyword-let">let</span> [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-is_app">is_app</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] = <span class="variable computation-variable">d</span> <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [ ⊢ <span class="variable meta-variable">D1'</span>] = <span class="constant computation-program"><a href="#theorem-pres">pres</a></span> [ ⊢ <span class="variable meta-variable">D1</span>] [ ⊢ <span class="variable meta-variable">S1</span>] <span class="keyword keyword-in">in</span> [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-is_app">is_app</a></span> <span class="variable meta-variable">D1'</span> <span class="variable meta-variable">D2</span>]
  | [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-s_app2">s_app2</a></span> <span class="variable meta-variable">V</span> <span class="variable meta-variable">S2</span>] ⇒ <span class="keyword keyword-let">let</span> [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-is_app">is_app</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] = <span class="variable computation-variable">d</span> <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [ ⊢ <span class="variable meta-variable">D2'</span>] = <span class="constant computation-program"><a href="#theorem-pres">pres</a></span> [ ⊢ <span class="variable meta-variable">D2</span>] [ ⊢ <span class="variable meta-variable">S2</span>] <span class="keyword keyword-in">in</span> [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-is_app">is_app</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2'</span>]
  | [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-s_app3">s_app3</a></span> <span class="variable meta-variable">V</span>] ⇒ <span class="keyword keyword-let">let</span> [ ⊢ <span class="constant lf-term-constant"><a href="#lf-term-is_app">is_app</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-is_lam">is_lam</a></span> (\\x. \\d. <span class="variable meta-variable">D1</span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">d</span>)) <span class="variable meta-variable">D2</span>] = <span class="variable computation-variable">d</span> <span class="keyword keyword-in">in</span>
    [ ⊢ <span class="variable meta-variable">D1</span> _ <span class="variable meta-variable">D2</span>];</code></pre>
`;function k(o){let s,n,p;return{c(){s=m(),n=new b(!1),p=r(),this.h()},l(a){y("svelte-9t1rlx",document.head).forEach(l),s=d(a),n=h(a,!1),p=r(),this.h()},h(){document.title="lambda Example",n.a=p},m(a,t){c(a,s,t),n.m(_,a,t),c(a,p,t)},p:e,i:e,o:e,d(a){a&&(l(s),l(p),n.d())}}}class E extends i{constructor(s){super(),v(this,s,null,k,f,{})}}export{E as component};
