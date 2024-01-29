import{s as d,n as u}from"../chunks/scheduler.BRW4IjsR.js";import{S as h,i as w,s as o,p as g,H as k,e as x,k as T,d as r,f as v,q as _,o as S,c as D,l as E,m as y,g as i,r as Q,u as F,v as U,w as G}from"../chunks/index.yRNBcVz4.js";import{K as W}from"../chunks/KaTeX.hibTZYAG.js";const $=`<h1 id="Transitivity-of-Algorithmic-Subtyping">Transitivity of Algorithmic Subtyping</h1>

<p>
	This example follows the proof in the proof pearl description which appeared at TPHOLs2007
	<a href="http://www.cs.mcgill.ca/~bpientka/papers/pearl.pdf"> [Pientka 2007]</a>. It shows a
	solution of the <a href="http://www.seas.upenn.edu/~plclub/poplmark/">POPLMARK Challenge</a>, part
	1A : Transitivity of Subtyping.
</p>
<p>
	This implementation not only uses higher-order abstract syntax in specifying the types, but we
	will exploit extensively the power of parametric and hypothetical judgment. As a benefit we do not
	need to implement a narrowing lemma separately, but get it &quot;for free&quot;.
</p>
<p>First, we define our type <code>tp</code> with higher-order abstract syntax in LF as follows:</p>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-tp" class="constant lf-type-constant">tp</span> : <span class="keyword keyword-type">type</span> =
| <span id="lf-term-top" class="constant lf-term-constant">top</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>
| <span id="lf-term-arr" class="constant lf-term-constant">arr</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>
| <span id="lf-term-forall" class="constant lf-term-constant">forall</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → (<span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>) → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>;

<span class="pragma pragma-name">--name <span class="constant"><a href="#lf-type-tp">tp</a></span> T.</span></code></pre>

<div class="documentation">
	<h2 id="Algorithmic-subtyping">Algorithmic subtyping</h2>

	<p>
		We do not give a general reflexivity and transitivity rule for type variables, but instead we
		provide for each type variable its own reflexivity and transitivity version. In other words, our
		rule for polymorphic types implements the following: $$\\frac{\\Gamma \\vdash T_1 &lt;: S_1 \\qquad
		\\Gamma, tr:a &lt;: U \\rightarrow U &lt;: T \\rightarrow a &lt;: T, w:a &lt;: T, ref : a &lt;: a
		\\vdash S_2 &lt;: T_2 }{\\Gamma \\vdash \\forall a:S_1.S_2(a) &lt;: \\forall a:T_1.T_2(a)}$$
	</p>
	<p>We use (\\(&lt;:\\)) or <code>sub</code> to denote algorithmic subtyping.</p>
</div>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-sub" class="constant lf-type-constant">sub</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="keyword keyword-type">type</span> =
| <span id="lf-term-sa_top" class="constant lf-term-constant">sa_top</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">S</span> <span class="constant lf-term-constant"><a href="#lf-term-top">top</a></span>
| <span id="lf-term-sa_arr" class="constant lf-term-constant">sa_arr</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">S1</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">S2</span> <span class="variable lf-variable">T2</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">S1</span> <span class="variable lf-variable">S2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>)
| <span id="lf-term-sa_all" class="constant lf-term-constant">sa_all</span> :
  <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">S1</span> →
    ({a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>}
       ({U : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {T : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">U</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">U</span> <span class="variable lf-variable">T</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">T</span>) →
         <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">T1</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="variable lf-variable">S2</span> <span class="variable lf-variable">a</span>) (<span class="variable lf-variable">T2</span> <span class="variable lf-variable">a</span>)) →
      <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable lf-variable">S1</span> <span class="variable lf-variable">S2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>);</code></pre>

<div class="documentation">
	<p>
		We specify the structure of the context using context schema
		<code>s_ctx</code> as follows:
	</p>
</div>

<pre><code><span class="keyword keyword-schema">schema</span> <span id="schema-s_ctx" class="constant context-schema">s_ctx</span> =
  <span class="keyword keyword-some">some</span> [<span class="variable lf-variable">u</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>]
  <span class="keyword keyword-block">block</span> (<span class="variable lf-variable">a</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
         <span class="variable lf-variable">tr</span> : {U : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {T : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">U</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">U</span> <span class="variable lf-variable">T</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">T</span>,
         <span class="variable lf-variable">w</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u</span>,
         <span class="variable lf-variable">ref</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>);</code></pre>

<div class="documentation">
	<h3 id="Reflexivity">Reflexivity</h3>

	<p><strong>Theorem</strong> : For every \\(\\Gamma\\) and \\(T\\), \\(\\Gamma\\vdash T &lt;: T\\).</p>
	<p>
		The reflexivity Theorem is simply described as
		<code>{g:s_ctx} {T: [g |- tp]} [g |- sub T T]</code> in computational-level in Beluga. Context
		variable <code>g</code> and term <code>T</code> are written explicitly using curly brackets
		<code>{g:s_ctx}</code> and <code>{T: [g |- tp]}</code>. We do case analysis on the term
		<code>T</code> of type <code>[g |- tp]</code>, which is written as <code>[g |- T]</code>.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-refl" class="constant computation-program">refl</span> : {<span class="variable meta-variable">g</span> : <span class="constant context-schema"><a href="#schema-s_ctx">s_ctx</a></span>} {<span class="variable meta-variable">T</span> : (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>)} (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">T</span> <span class="variable meta-variable">T</span>) =
<span class="keyword keyword-mlam">mlam</span> <span class="variable meta-variable">g</span> ⇒ <span class="keyword keyword-mlam">mlam</span> <span class="variable meta-variable">T</span> ⇒
  <span class="keyword keyword-case">case</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">T</span>] <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.1] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.4]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-top">top</a></span>] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable meta-variable">T1</span> <span class="variable meta-variable">T2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">S1</span>] = <span class="constant computation-program"><a href="#theorem-refl">refl</a></span> [<span class="variable context-variable">g</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">T1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">S2</span>] = <span class="constant computation-program"><a href="#theorem-refl">refl</a></span> [<span class="variable context-variable">g</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">T2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">S1</span> <span class="variable meta-variable">S2</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">T1</span> (\\a. <span class="variable meta-variable">T2</span>)] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">S1</span>] = <span class="constant computation-program"><a href="#theorem-refl">refl</a></span> [<span class="variable context-variable">g</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">T1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span>
      [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
        <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
               tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
               w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
               ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>) ⊢ <span class="variable meta-variable">S2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.3, <span class="variable lf-variable">b</span>.4]] =
      <span class="constant computation-program"><a href="#theorem-refl">refl</a></span>
        [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
          <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
                 tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
                 w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
                 ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>)] [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> ⊢ <span class="variable meta-variable">T2</span>[…, <span class="variable lf-variable">b</span>.1]] <span class="keyword keyword-in">in</span>
    [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">S1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">S2</span>)];</code></pre>

<div class="documentation">
	<h3 id="Transitivity">Transitivity</h3>

	<p>
		<strong>Theorem</strong> : For every \\(\\Gamma\\), \\(S\\), \\(Q\\) and \\(T\\), if \\(\\Gamma\\vdash S
		&lt;: Q\\) and \\(\\Gamma\\vdash Q &lt;: T\\), then \\(\\Gamma\\vdash S &lt;: T\\).
	</p>
	<p>
		The transitivity Theorem is described as
		<code>(g:s_ctx){Q:[g |- tp]}[g |- sub S Q] -&gt; [g |- sub Q T] -&gt; [g |- sub S T]</code>. The
		context variable is written implicitly in round bracket as <code>(g:s_ctx)</code>. We do case
		analysis on the derivation of type <code>[g |- sub S Q]</code>. In some cases we need to provide
		extral type annotation for the branch. For example, in the case
		<code>[g |- sa_arr D1 D2]</code>, which uses <code>sa_arr</code> rule for the last step of
		derivation <code>d1</code>, we add type annotation
		<code>[g |- sub (arr S1 S2) (arr Q1 Q2)]</code> to obtain terms <code>Q1</code> and
		<code>Q2</code>, which are later used as arguments. We use the same technique in the branch of
		<code>sa_all</code>. We also need to specify the type of some variables when we don't have
		enough information on them. For example, in the case <code>[g |- #p.2 U' T' D1 D2]</code>, we
		need to specify the type of parameter variable <code>#p</code> and the type of <code>D1</code>.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-trans" class="constant computation-program">trans</span> :
  (<span class="variable meta-variable">g</span> : <span class="constant context-schema"><a href="#schema-s_ctx">s_ctx</a></span>) {<span class="variable meta-variable">Q</span> : (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>)} (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">S</span> <span class="variable meta-variable">Q</span>) → (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">Q</span> <span class="variable meta-variable">T</span>) → (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">S</span> <span class="variable meta-variable">T</span>) =
<span class="keyword keyword-mlam">mlam</span> <span class="variable meta-variable">Q</span> ⇒ <span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d1</span> ⇒ <span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d2</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">d1</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.3] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] = <span class="variable computation-variable">d2</span> <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.2 <span class="variable meta-variable">Q</span> _ <span class="variable parameter-variable">#p</span>.3 <span class="variable meta-variable">D2</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.4] ⇒ <span class="variable computation-variable">d2</span>
  | {#p :
      #(<span class="variable context-variable">g</span> ⊢
        <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
               tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
               w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">U'</span>[…],
               ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>))} {D1 : (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable parameter-variable">#p</span>.1 <span class="variable meta-variable">U'</span>)}
    [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.2 <span class="variable meta-variable">U'</span> <span class="variable meta-variable">T'</span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">F1</span>] = <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">T'</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="variable computation-variable">d2</span> <span class="keyword keyword-in">in</span>
    <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">U'</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">F1</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>] = <span class="variable computation-variable">d2</span> <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] : (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable meta-variable">S1</span> <span class="variable meta-variable">S2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable meta-variable">Q1</span> <span class="variable meta-variable">Q2</span>)) ⇒
    (<span class="keyword keyword-case">case</span> <span class="variable computation-variable">d2</span> <span class="keyword keyword-of">of</span>
     | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">F1</span>] = <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">Q1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>]
       <span class="keyword keyword-in">in</span> <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">F2</span>] = <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">Q2</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E2</span>] <span class="keyword keyword-in">in</span>
       [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">F1</span> <span class="variable meta-variable">F2</span>]
     | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>])
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">D1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">D2</span>)] :
      (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">S1</span> (\\a. <span class="variable meta-variable">S2</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">Q1</span> (\\a. <span class="variable meta-variable">Q2</span>))) ⇒
    (<span class="keyword keyword-case">case</span> <span class="variable computation-variable">d2</span> <span class="keyword keyword-of">of</span>
     | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>]
     | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">E1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">E2</span>)] :
         (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">Q1</span> (\\a. <span class="variable meta-variable">Q2</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">T1</span> (\\a. <span class="variable meta-variable">T2</span>))) ⇒
       <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">F1</span>] = <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">Q1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
       <span class="keyword keyword-let">let</span>
         [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
           <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
                  tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
                  w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
                  ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>) ⊢ <span class="variable meta-variable">F2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.3, <span class="variable lf-variable">b</span>.4]] =
         <span class="constant computation-program"><a href="#theorem-trans">trans</a></span>
           [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
             <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
                    tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
                    w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
                    ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>) ⊢ <span class="variable meta-variable">Q2</span>[…, <span class="variable lf-variable">b</span>.1]]
           [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> ⊢ <span class="variable meta-variable">D2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.2 <span class="variable meta-variable">T1</span>[…] <span class="variable meta-variable">Q1</span>[…] <span class="variable lf-variable">b</span>.3 <span class="variable meta-variable">E1</span>[…], <span class="variable lf-variable">b</span>.4]]
           [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> ⊢ <span class="variable meta-variable">E2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.3, <span class="variable lf-variable">b</span>.4]] <span class="keyword keyword-in">in</span>
       [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">F1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">F2</span>)]);</code></pre>

<div class="documentation">
	<p>We only mark out this special case:</p>
	<p>If <code>d1 : [g |- sub (forall S1 (\\a.S2)) (forall Q1 (\\a.Q2))]</code></p>
	<p>and <code>d2 : [g |- sub (forall Q1 (\\a.Q2)) (forall T1 (\\a.T2))]</code></p>
	<p>then <code>f : [g |- sub (forall S1 (\\a.S2) (forall T1 (\\a.T2))]</code>.</p>
	<p>By inversion on <code>d1</code>, we have:</p>
	<p><code>D1 : [g |- sub Q1 S1]</code></p>
	<p>
		<code
			>D2 : [g, b : block (a:tp, tr:{u':tp}{t':tp} sub a u' -&gt; sub u' t' -&gt; sub a t', w: sub a
			Q1[..], ref: sub a a ) |- sub S2[.. b.1] Q2[.., b.1]]</code
		>
	</p>
	<p>By inversion on <code>d2</code>:</p>
	<p><code>E1 : [g |- sub T1 Q1]</code></p>
	<p>
		<code
			>E2 : [g, b : block (a:tp, tr:{u':tp}{t':tp} sub a u' -&gt; sub u' t' -&gt; sub a t', w: sub a
			T1, ref: sub a a ) |- sub (Q2 b.1) (T2 b.1)]</code
		>
	</p>
	<p>
		By the i.h. on <code>E1</code> and <code>D1</code> we can obtain a derivation
		<code>F1 : [g |- sub T1 S1]</code>.
	</p>
	<p>
		We would like to obtain another derivation
		<code
			>F2 : [g, b : block (a:tp, tr:{u':tp}{t':tp} sub a u' -&gt; sub u' t' -&gt; sub a t', w: sub a
			T1[…], ref: sub a a ) |- sub S2[… , b.1] T2[ … , b.1]]</code
		>. However, applying the induction hypothesis on <code>D2</code> and <code>E2</code> will not
		work because <code>D2</code> depends on the assumption <code>w: sub a Q1</code> while
		<code>E2</code> depends on the assumption <code>w: sub a T1</code>. We need to first create a
		derivation <code>D2'</code> which depends on <code>w: sub a T1[..]</code>. Recall
		<code>D2</code> is a parametric and hypothetical derivation which can be viewed as a function
		which expects as inputs <code>tr: sub a u' -&gt; sub u' t' -&gt; sub a t', ref: sub a a</code>,
		and an object of type <code>sub a Q1[..]</code>. In other words, we need to turn a function
		which expects <code>sub a Q1</code> into a function which expects an object of type
		<code>sub a T1</code>. We use <code>b.2 T1[..] Q1[..] b.3 E1[..]</code> to achieve this
		transformation.
	</p>

	<h2 id="Declarative-subtyping">Declarative subtyping</h2>

	<p>
		We can also define declarative subtyping in Beluga and prove the equivalence between algoritmic
		and declarative subtyping through soundness and completeness proofs. We use (\\(&lt;\\)) or
		<code>subtype</code> to denote declarative subtyping.
	</p>
</div>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-subtype" class="constant lf-type-constant">subtype</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span> → <span class="keyword keyword-type">type</span> =
| <span id="lf-term-subtype_top" class="constant lf-term-constant">subtype_top</span> : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T</span> <span class="constant lf-term-constant"><a href="#lf-term-top">top</a></span>
| <span id="lf-term-subtype_refl" class="constant lf-term-constant">subtype_refl</span> : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T</span> <span class="variable lf-variable">T</span>
| <span id="lf-term-subtype_trans" class="constant lf-term-constant">subtype_trans</span> : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span> → <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T2</span> <span class="variable lf-variable">T3</span> → <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T3</span>
| <span id="lf-term-subtype_arrow" class="constant lf-term-constant">subtype_arrow</span> :
  <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">S1</span> → <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">S2</span> <span class="variable lf-variable">T2</span> → <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">S1</span> <span class="variable lf-variable">S2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-arr">arr</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>)
| <span id="lf-term-subtype_forall" class="constant lf-term-constant">subtype_forall</span> :
  <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">S1</span> →
    ({x : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">T1</span> → <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> (<span class="variable lf-variable">S2</span> <span class="variable lf-variable">x</span>) (<span class="variable lf-variable">T2</span> <span class="variable lf-variable">x</span>)) →
      <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable lf-variable">S1</span> <span class="variable lf-variable">S2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable lf-variable">T1</span> <span class="variable lf-variable">T2</span>);</code></pre>

<div class="documentation">
	<p>
		In order to prove soundness and completeness, we define a new context which includes both
		algorithmic subtyping and declarative subtyping.
	</p>
</div>

<pre><code><span class="keyword keyword-schema">schema</span> <span id="schema-ss_ctx" class="constant context-schema">ss_ctx</span> =
  <span class="keyword keyword-some">some</span> [<span class="variable lf-variable">u</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>]
  <span class="keyword keyword-block">block</span> (<span class="variable lf-variable">a</span> : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
         <span class="variable lf-variable">tr</span> : {U : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {T : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">U</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">U</span> <span class="variable lf-variable">T</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">T</span>,
         <span class="variable lf-variable">w</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u</span>,
         <span class="variable lf-variable">ref</span> : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
         <span class="variable lf-variable">w'</span> : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u</span>);</code></pre>

<div class="documentation">
	<h3 id="Soundness">Soundness</h3>

	<p>
		<strong>Theorem</strong> : For every \\(\\Gamma\\), \\(T\\) and \\(S\\), if \\(\\Gamma\\vdash T&lt;:S\\),
		then \\(\\Gamma\\vdash T &lt; S\\) .
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-sound" class="constant computation-program">sound</span> : (<span class="variable meta-variable">g</span> : <span class="constant context-schema"><a href="#schema-ss_ctx">ss_ctx</a></span>) (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">T</span> <span class="variable meta-variable">S</span>) → (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable meta-variable">T</span> <span class="variable meta-variable">S</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">d</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_top">subtype_top</a></span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] = <span class="constant computation-program"><a href="#theorem-sound">sound</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E2</span>] = <span class="constant computation-program"><a href="#theorem-sound">sound</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_arrow">subtype_arrow</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">D1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">D2</span>)] :
      (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">S1</span> (\\a. <span class="variable meta-variable">S2</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">T1</span> (\\a. <span class="variable meta-variable">T2</span>))) ⇒
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] = <span class="constant computation-program"><a href="#theorem-sound">sound</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span>
      [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
        <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
               tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
               w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
               ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
               w' : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…]) ⊢ <span class="variable meta-variable">E2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.5]] =
      <span class="constant computation-program"><a href="#theorem-sound">sound</a></span>
        [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
          <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
                 tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
                 w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
                 ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
                 w' : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…]) ⊢ <span class="variable meta-variable">D2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.3, <span class="variable lf-variable">b</span>.4]] <span class="keyword keyword-in">in</span>
    [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_forall">subtype_forall</a></span> <span class="variable meta-variable">E1</span> (\\a. \\w. <span class="variable meta-variable">E2</span>)]
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.3] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.5]
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.4] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_refl">subtype_refl</a></span>]
  | {#p :
      #(<span class="variable context-variable">g</span> ⊢
        <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
               tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
               w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">U'</span>[…],
               ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
               w' : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">U'</span>[…]))} {D1 : (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable parameter-variable">#p</span>.1 <span class="variable meta-variable">U'</span>)}
    [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.2 <span class="variable meta-variable">U'</span> <span class="variable meta-variable">T'</span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] = <span class="constant computation-program"><a href="#theorem-sound">sound</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E2</span>] = <span class="constant computation-program"><a href="#theorem-sound">sound</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_trans">subtype_trans</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>];</code></pre>

<div class="documentation">
	<h3 id="Completeness">Completeness</h3>

	<p>
		<strong>Theorem</strong>: For every \\(\\Gamma\\), \\(T\\) and \\(S\\), if \\(\\Gamma\\vdash T &lt; S\\),
		then \\(\\Gamma\\vdash T &lt;: S\\).
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-complete" class="constant computation-program">complete</span> : (<span class="variable meta-variable">g</span> : <span class="constant context-schema"><a href="#schema-ss_ctx">ss_ctx</a></span>) (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable meta-variable">T</span> <span class="variable meta-variable">S</span>) → (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable meta-variable">T</span> <span class="variable meta-variable">S</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">d</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.5] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="variable parameter-variable">#p</span>.3]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_top">subtype_top</a></span>] ⇒ [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_top">sa_top</a></span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_refl">subtype_refl</a></span>] ⇒ <span class="constant computation-program"><a href="#theorem-refl">refl</a></span> [<span class="variable context-variable">g</span>] [<span class="variable context-variable">g</span> ⊢ _]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_trans">subtype_trans</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] = <span class="constant computation-program"><a href="#theorem-complete">complete</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] = <span class="constant computation-program"><a href="#theorem-complete">complete</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E2</span>] <span class="keyword keyword-in">in</span> <span class="constant computation-program"><a href="#theorem-trans">trans</a></span> [<span class="variable context-variable">g</span> ⊢ _] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_arrow">subtype_arrow</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] = <span class="constant computation-program"><a href="#theorem-complete">complete</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D2</span>] = <span class="constant computation-program"><a href="#theorem-complete">complete</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_arr">sa_arr</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>]
  | [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-subtype_forall">subtype_forall</a></span> <span class="variable meta-variable">E1</span> (\\x. \\y. <span class="variable meta-variable">E2</span>)] :
      (<span class="variable context-variable">g</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">S1</span> (\\a. <span class="variable meta-variable">S2</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-forall">forall</a></span> <span class="variable meta-variable">T1</span> (\\a. <span class="variable meta-variable">T2</span>))) ⇒
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">D1</span>] = <span class="constant computation-program"><a href="#theorem-complete">complete</a></span> [<span class="variable context-variable">g</span> ⊢ <span class="variable meta-variable">E1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span>
      [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
        <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
               tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
               w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
               ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
               w' : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…]) ⊢ <span class="variable meta-variable">D2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2, <span class="variable lf-variable">b</span>.3, <span class="variable lf-variable">b</span>.4]] =
      <span class="constant computation-program"><a href="#theorem-complete">complete</a></span>
        [<span class="variable context-variable">g</span>, <span class="variable lf-variable">b</span> :
          <span class="keyword keyword-block">block</span> (a : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>,
                 tr : {u' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} {t' : <span class="constant lf-type-constant"><a href="#lf-type-tp">tp</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">u'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">u'</span> <span class="variable lf-variable">t'</span> → <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">t'</span>,
                 w : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…],
                 ref : <span class="constant lf-type-constant"><a href="#lf-type-sub">sub</a></span> <span class="variable lf-variable">a</span> <span class="variable lf-variable">a</span>,
                 w' : <span class="constant lf-type-constant"><a href="#lf-type-subtype">subtype</a></span> <span class="variable lf-variable">a</span> <span class="variable meta-variable">T1</span>[…]) ⊢ <span class="variable meta-variable">E2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.5]] <span class="keyword keyword-in">in</span>
    [<span class="variable context-variable">g</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-sa_all">sa_all</a></span> <span class="variable meta-variable">D1</span> (\\a. \\tr. \\w. \\ref. <span class="variable meta-variable">D2</span>)];</code></pre>
`;function A(m){let l,n,c,t,p,s,f="Download the code",b;return n=new W({}),{c(){l=o(),g(n.$$.fragment),c=o(),t=new k(!1),p=o(),s=x("a"),s.textContent=f,this.h()},l(a){T("svelte-408j",document.head).forEach(r),l=v(a),_(n.$$.fragment,a),c=v(a),t=S(a,!1),p=v(a),s=D(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),E(s)!=="svelte-418031"&&(s.textContent=f),this.h()},h(){document.title="Transitivity of Algorithmic Subtyping",t.a=p,y(s,"class","btn btn-lg btn-primary mb-4"),y(s,"href","https://github.com/Beluga-lang/Beluga/blob/master/examples/literate_beluga/1Intermediate/Poplmark.bel")},m(a,e){i(a,l,e),Q(n,a,e),i(a,c,e),t.m($,a,e),i(a,p,e),i(a,s,e),b=!0},p:u,i(a){b||(F(n.$$.fragment,a),b=!0)},o(a){U(n.$$.fragment,a),b=!1},d(a){a&&(r(l),r(c),t.d(),r(p),r(s)),G(n,a)}}}class B extends h{constructor(l){super(),w(this,l,null,A,d,{})}}export{B as component};
