import{s as f,n as c}from"../chunks/scheduler.BRW4IjsR.js";import{S as m,i as y,s as i,H as h,e as x,k as u,d as p,f as b,o as w,c as k,l as q,m as v,g as r}from"../chunks/index.yRNBcVz4.js";const g=`<div class="documentation">
	<h1 id="Algorithmic-Equality-for-the-Untyped-Lambda-calculus-Generalized-context-version">
		Algorithmic Equality for the Untyped Lambda-calculus (Generalized context version)
	</h1>
	<p>
		We discuss completeness of algorithmic equality for untyped lambda-terms with respect to
		declarative equality of lambda-terms. This case-study is part of
		<a ref="https://github.com/pientka/ORBI">ORBI</a>, Open challenge problem Repository for systems
		reasoning with Binders. For a detailed description of the proof and a discussion regarding other
		systems see <a target="_blank" href="/beluga-site/orbi-jar.pdf">(Felty et al, 2014)</a>.
	</p>
	<p>The mechanization highlights several aspects:</p>
	<ul>
		<li>Induction on universally quantified objects</li>
		<li>Stating and proving properties in a generalized context</li>
		<li>Reasoning using context subsumption</li>
	</ul>

	<h2 id="Syntax">Syntax</h2>

	<p>We first define lambda-terms in the logical framework LF using Beluga-style syntax.</p>
</div>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-tm" class="constant lf-type-constant">tm</span> : <span class="keyword keyword-type">type</span> =
| <span id="lf-term-app" class="constant lf-term-constant">app</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>
| <span id="lf-term-lam" class="constant lf-term-constant">lam</span> : (<span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>) → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>;</code></pre>

<div class="documentation">
	<p>
		The type for <code>lam</code> reflects that binders are represented in the object language using
		binders in the HOAS meta-language.
	</p>
	<h2 id="Judgements-and-Rules">Judgements and Rules</h2>

	<p>
		We describe algorithmic and declarative equality for the untyped lambda-calculus using axioms
		and inference rules. The Beluga code is a straightforward HOAS encoding of the associated rules.
	</p>

	<h3 id="Algorithmic-Equality">Algorithmic Equality</h3>

	<p>
		For algorithmic equality, we have the predicate <code>aeq</code> of type
		<code>tm -&gt; tm -&gt; type</code>, and inference rules for term applications
		<code>ae_a</code> and lambda-abstractions <code>ae_l</code>
	</p>
</div>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-aeq" class="constant lf-type-constant">aeq</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="keyword keyword-type">type</span> =
| <span id="lf-term-ae_a" class="constant lf-term-constant">ae_a</span> : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">M1</span> <span class="variable lf-variable">N1</span> → <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">M2</span> <span class="variable lf-variable">N2</span> → <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">M1</span> <span class="variable lf-variable">M2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">N1</span> <span class="variable lf-variable">N2</span>)
| <span id="lf-term-ae_l" class="constant lf-term-constant">ae_l</span> :
  ({x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span> → <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> (<span class="variable lf-variable">M</span> <span class="variable lf-variable">x</span>) (<span class="variable lf-variable">N</span> <span class="variable lf-variable">x</span>)) → <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> (\\x. <span class="variable lf-variable">M</span> <span class="variable lf-variable">x</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> (\\x. <span class="variable lf-variable">N</span> <span class="variable lf-variable">x</span>));</code></pre>

<div class="documentation">
	<h3 id="Declarative-Equality">Declarative Equality</h3>
	<p>
		Next we define declarative equality in order to establish its equivalence with algorithmic
		equality and prove completeness. Note that the only difference between the two judgements is
		that declarative equality explicitly includes inference rules for reflexivity <code>de_r</code>,
		transitivity <code>de_t</code>, and symmetry <code>de_s</code>: properties which we will prove
		to be intrinsic to algorithmic equality in the untyped lambda-calculus.
	</p>
</div>

<pre><code><span class="keyword keyword-LF">LF</span> <span id="lf-type-deq" class="constant lf-type-constant">deq</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span> → <span class="keyword keyword-type">type</span> =
| <span id="lf-term-de_l" class="constant lf-term-constant">de_l</span> :
  ({x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>} <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> (<span class="variable lf-variable">M</span> <span class="variable lf-variable">x</span>) (<span class="variable lf-variable">M'</span> <span class="variable lf-variable">x</span>)) →
    <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> (\\x. <span class="variable lf-variable">M</span> <span class="variable lf-variable">x</span>)) (<span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> (\\x. <span class="variable lf-variable">M'</span> <span class="variable lf-variable">x</span>))
| <span id="lf-term-de_a" class="constant lf-term-constant">de_a</span> : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">M1</span> <span class="variable lf-variable">N1</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">M2</span> <span class="variable lf-variable">N2</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">M1</span> <span class="variable lf-variable">M2</span>) (<span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable lf-variable">N1</span> <span class="variable lf-variable">N2</span>)
| <span id="lf-term-de_r" class="constant lf-term-constant">de_r</span> : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">M</span> <span class="variable lf-variable">M</span>
| <span id="lf-term-de_t" class="constant lf-term-constant">de_t</span> : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">M</span> <span class="variable lf-variable">L</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">L</span> <span class="variable lf-variable">N</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">M</span> <span class="variable lf-variable">N</span>
| <span id="lf-term-de_s" class="constant lf-term-constant">de_s</span> : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">T</span> <span class="variable lf-variable">S</span> → <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">S</span> <span class="variable lf-variable">T</span>;</code></pre>

<div class="documentation">
	<h2 id="Context-schemas">Context schemas</h2>
	<p>Just as types classify expressions, contexts are classified by context schemas.</p>
</div>

<pre><code><span class="keyword keyword-schema">schema</span> <span id="schema-xaG" class="constant context-schema">xaG</span> = <span class="keyword keyword-block">block</span> (<span class="variable lf-variable">x</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, <span class="variable lf-variable">ae_v</span> : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>);

<span class="keyword keyword-schema">schema</span> <span id="schema-daG" class="constant context-schema">daG</span> = <span class="keyword keyword-block">block</span> (<span class="variable lf-variable">x</span> : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, <span class="variable lf-variable">ae_v</span> : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>, <span class="variable lf-variable">de_v</span> : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>);</code></pre>

<div class="documentation">
	<h2 id="Proof-of-Reflexivity">Proof of Reflexivity</h2>
	<p>
		We first prove admissibility of reflexivity. The proof is implemented as a recursive function
		called <code>reflG</code> of type <code>{g:xaG}{M:[Γ |- tm]}[Γ |- aeq M M]</code>: for all
		contexts <code>g</code> that have schema <code>xaG</code>, for all terms <code>M</code>, we have
		a proof that <code>[Γ |- aeq M M]</code>. Quantification over contexts and contextual objects in
		computation-level types is denoted by curly braces; the corresponding abstraction on the level
		of expressions is written as <code>mlam g =&gt; mlam M =&gt; e</code>.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-reflG" class="constant computation-program">reflG</span> : {<span class="variable meta-variable">Γ</span> : <span class="constant context-schema"><a href="#schema-xaG">xaG</a></span>} {<span class="variable meta-variable">M</span> : (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>)} (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">M</span>) =
<span class="keyword keyword-mlam">mlam</span> <span class="variable meta-variable">Γ</span> ⇒ <span class="keyword keyword-mlam">mlam</span> <span class="variable meta-variable">M</span> ⇒
  <span class="keyword keyword-case">case</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">M</span>] <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.1] ⇒ [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.2]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-lam">lam</a></span> (\\x. <span class="variable meta-variable">M</span>)] ⇒
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (y : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">y</span> <span class="variable lf-variable">y</span>) ⊢ <span class="variable meta-variable">D</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] =
      <span class="constant computation-program"><a href="#theorem-reflG">reflG</a></span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (y : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">y</span> <span class="variable lf-variable">y</span>)] [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> ⊢ <span class="variable meta-variable">M</span>[…, <span class="variable lf-variable">b</span>.1]] <span class="keyword keyword-in">in</span>
    [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\w. <span class="variable meta-variable">D</span>)]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-app">app</a></span> <span class="variable meta-variable">M1</span> <span class="variable meta-variable">M2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D1</span>] = <span class="constant computation-program"><a href="#theorem-reflG">reflG</a></span> [<span class="variable context-variable">Γ</span>] [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">M1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D2</span>] = <span class="constant computation-program"><a href="#theorem-reflG">reflG</a></span> [<span class="variable context-variable">Γ</span>] [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">M2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>];</code></pre>

<div class="documentation">
	<p>
		In the proof for <code>reflG</code> we begin by introducing and <code>M</code> followed by a
		case analysis on <code>[Γ |- M]</code> using pattern matching. There are three possible cases
		for <code>M</code>:
	</p>
	<ul>
		<li>
			<strong>Variable case.</strong> If <code>M</code> is a variable from <code>g</code>, we write
			<code>[Γ |- #p.1]</code> where <code>#p</code> denotes a parameter variable declared in the
			context <code>g</code>. Operationally, <code>#p</code> can be instantiated with any bound
			variable from the context <code>g</code>. Since the context <code>g</code> has schema
			<code>xaG</code>, it contains blocks <code>x:tm , ae_v:aeq x x</code>. The first projection
			allows us to extract the term component, while the second projection denotes the proof of
			<code>aeq x x</code>.
		</li>
		<li>
			<strong>Lambda case.</strong> If <code>M</code> is a lambda-term, then we extend the context
			and appeal to the induction hypothesis by making a recursive call. Beluga supports weakening
			which allows us to use M that has type <code>[g, x:tm |- tm]</code> in the extended context
			<code>[g, b:block y:tm , ae_v: aeq y y]</code>. We simply construct a weakening substitution
			<code>.. b.1</code> with domain <code>g, y:tm</code> and range
			<code>g, b:block y:tm , ae_v:aeq y y.</code> that essentially renames <code>y</code> to
			<code>b.1</code> in <code>M</code>. The recursive call returns
			<code>[g, b:block y:tm , ae_v:aeq y y |- D[.., b.1, b.2]]</code>. Using it together with rule
			<code>ae_l</code> we build the final derivation.
		</li>
		<li>
			<strong>Application case.</strong> If <code>M</code> is an application, we appeal twice to the
			induction hypothesis and build a proof for <code>[Γ |- aeq (app M1 M2) (app M1 M2)]</code>.
		</li>
	</ul>

	<h2 id="Proof-of-Transitivity">Proof of Transitivity</h2>

	<p>
		Next, we prove admissibility of transitivity. We encode the proof of transitivity by
		pattern-matching on the first derivation
		<code>[Γ |- aeq M L]</code> to arrive at the second <code>[Γ |- aeq L N]</code>. The recursive
		function <code>transG</code> handles the three cases for variables, lambda-terms, and
		applications in a similar fashion to <code>reflG</code>. The context <code>g:xaG</code> is
		surrounded by parentheses <code>( )</code> to indicate that it is implicit in the actual proof
		and need to be reconstructed.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-transG" class="constant computation-program">transG</span> : (<span class="variable meta-variable">Γ</span> : <span class="constant context-schema"><a href="#schema-xaG">xaG</a></span>) (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">L</span>) → (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">L</span> <span class="variable meta-variable">N</span>) → (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">N</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d1</span> ⇒ <span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d2</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">d1</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.2] ⇒ <span class="variable computation-variable">d2</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\u. <span class="variable meta-variable">D1</span>)] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\u. <span class="variable meta-variable">D2</span>)] = <span class="variable computation-variable">d2</span> <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>) ⊢ <span class="variable meta-variable">E</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] =
      <span class="constant computation-program"><a href="#theorem-transG">transG</a></span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x' : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x'</span> <span class="variable lf-variable">x'</span>) ⊢ <span class="variable meta-variable">D1</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]]
        [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> ⊢ <span class="variable meta-variable">D2</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\u. <span class="variable meta-variable">E</span>)]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">F1</span> <span class="variable meta-variable">F2</span>] = <span class="variable computation-variable">d2</span> <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">E1</span>] = <span class="constant computation-program"><a href="#theorem-transG">transG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D1</span>] [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">E2</span>] = <span class="constant computation-program"><a href="#theorem-transG">transG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D2</span>] [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>];</code></pre>

<div class="documentation">
	<p>
		Here, the variable case exploits that if <code>aeq M N</code> is an element of the context
		<code>g</code>, then <code>M = N</code>. Note that the recursive calls do not take the context
		<code>g</code> as an explicit argument.
	</p>

	<h2 id="Proof-of-Symmetry">Proof of Symmetry</h2>
	<p>
		Again, we encode the proof of symmetry as a recursive function
		<code>symG</code>. As in <code>transG</code>, the context <code>g</code> is implicit.
		Furthermore, we handle the variable case using the same property in both functions.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-symG" class="constant computation-program">symG</span> : (<span class="variable meta-variable">Γ</span> : <span class="constant context-schema"><a href="#schema-xaG">xaG</a></span>) (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">L</span>) → (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">L</span> <span class="variable meta-variable">M</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">d</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">d</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.2] ⇒ <span class="variable computation-variable">d</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\u. <span class="variable meta-variable">D1</span>)] ⇒
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>) ⊢ <span class="variable meta-variable">E</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] =
      <span class="constant computation-program"><a href="#theorem-symG">symG</a></span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x' : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, ae_v : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x'</span> <span class="variable lf-variable">x'</span>) ⊢ <span class="variable meta-variable">D1</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] <span class="keyword keyword-in">in</span>
    [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\u. <span class="variable meta-variable">E</span>)]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">E1</span>] = <span class="constant computation-program"><a href="#theorem-symG">symG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">E2</span>] = <span class="constant computation-program"><a href="#theorem-symG">symG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">E1</span> <span class="variable meta-variable">E2</span>];</code></pre>

<div class="documentation">
	<h2 id="Proof-of-Completeness">Proof of Completeness</h2>
	<p>
		Finally, we implement the completeness proof as as a recursive function
		<code>ceqG</code>.
	</p>
</div>

<pre><code><span class="keyword keyword-rec">rec</span> <span id="theorem-ceq" class="constant computation-program">ceq</span> : (<span class="variable meta-variable">Γ</span> : <span class="constant context-schema"><a href="#schema-daG">daG</a></span>) (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">N</span>) → (<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable meta-variable">M</span> <span class="variable meta-variable">N</span>) =
<span class="keyword keyword-fn">fn</span> <span class="variable computation-variable">e</span> ⇒
  <span class="keyword keyword-case">case</span> <span class="variable computation-variable">e</span> <span class="keyword keyword-of">of</span>
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.3] ⇒ [<span class="variable context-variable">Γ</span> ⊢ <span class="variable parameter-variable">#p</span>.2]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-de_r">de_r</a></span>] ⇒ <span class="constant computation-program"><a href="#theorem-reflG">reflG</a></span> [<span class="variable context-variable">Γ</span>] [<span class="variable context-variable">Γ</span> ⊢ _]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-de_a">de_a</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F1</span>] = <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F2</span>] = <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_a">ae_a</a></span> <span class="variable meta-variable">F1</span> <span class="variable meta-variable">F2</span>]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-de_l">de_l</a></span> (\\x. \\u. <span class="variable meta-variable">D</span>)] ⇒
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, _t : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>, u : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>) ⊢ <span class="variable meta-variable">F</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.2]] =
      <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span>, <span class="variable lf-variable">b</span> : <span class="keyword keyword-block">block</span> (x : <span class="constant lf-type-constant"><a href="#lf-type-tm">tm</a></span>, _t : <span class="constant lf-type-constant"><a href="#lf-type-aeq">aeq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>, u : <span class="constant lf-type-constant"><a href="#lf-type-deq">deq</a></span> <span class="variable lf-variable">x</span> <span class="variable lf-variable">x</span>) ⊢ <span class="variable meta-variable">D</span>[…, <span class="variable lf-variable">b</span>.1, <span class="variable lf-variable">b</span>.3]]
    <span class="keyword keyword-in">in</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-ae_l">ae_l</a></span> (\\x. \\v. <span class="variable meta-variable">F</span>)]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-de_t">de_t</a></span> <span class="variable meta-variable">D1</span> <span class="variable meta-variable">D2</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F2</span>] = <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D2</span>] <span class="keyword keyword-in">in</span>
    <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F1</span>] = <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D1</span>] <span class="keyword keyword-in">in</span> <span class="constant computation-program"><a href="#theorem-transG">transG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F1</span>] [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F2</span>]
  | [<span class="variable context-variable">Γ</span> ⊢ <span class="constant lf-term-constant"><a href="#lf-term-de_s">de_s</a></span> <span class="variable meta-variable">D</span>] ⇒ <span class="keyword keyword-let">let</span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F</span>] = <span class="constant computation-program"><a href="#theorem-ceq">ceq</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">D</span>] <span class="keyword keyword-in">in</span> <span class="constant computation-program"><a href="#theorem-symG">symG</a></span> [<span class="variable context-variable">Γ</span> ⊢ <span class="variable meta-variable">F</span>];</code></pre>

<div class="documentation">
	<p>
		We explain here the three cases shown in the informal proof in the companion paper (Felty et al,
		2014). First, let us consider the case where we used an assumption from the context. Since the
		context <code>g</code> consists of blocks with the following structure:
		<code>block x:tm , ae_v:aeq x x, de_v: deq x x</code>, we in fact want to match on the third
		element of such a block. This is written as <code>#p.3</code>. The type of <code>#p.3</code> is
		<code>deq #p.1 #p.1</code>. Since our context always contains a block and the parameter variable
		<code>#p</code> describes such a block, we know that there exists a proof for
		<code>aeq #p.1 #p.1</code>, which can be described by <code>#p.2</code>.
	</p>
	<p>
		Second, we consider the case where we applied the reflexivity rule
		<code>de_r</code> as a last step. In this case, we need to refer to the reflexivity lemma we
		proved about algorithmic equality. To use the function <code>reflG</code>, which implements the
		reflexivity lemma for algorithmic equality, we need a context of schema <code>xaG</code>;
		however, the context used in the proof for <code>ceqG</code> is of schema <code>daG</code> and
		we rely on context subsumption to justify passing a context <code>daG</code> in place of a
		context <code>xaG</code>. The cases for transitivity and symmetry are similar.
	</p>
	<p>
		Third, we consider the case for <code>de_l</code>, the case for lambda-abstractions. In this
		case, we extend the context with the new declarations about variables and pass to the recursive
		call <code>ceqG</code> the derivation
		<code>[Γ, b:block (x:tm , ae_v:aeq x x, de_v: deq x x) |- D[.., b.1, b.3]]</code>. Declaration
		weakening (in the informal proof d-wk (Felty et al, 2014)) is built-in. In the pattern, the
		derivation <code>D</code> has type <code>[Γ, x:tm , ae_v:aeq x x |- deq M[.., x] N]</code>. We
		hence construct a weakening substitution <code>.. b.1 b.3</code> that allows us to move
		<code>D</code> to the context <code>Γ, b:block (x:tm, ae_v:aeq x x, de_v:deq x x)</code>. The
		result of recursive call is a derivation <code>F</code>, where <code>F</code> only depends on
		<code>x:tm</code> and <code>u:aeq x x</code>. In the on-paper proof we refer to declaration
		strengthening (d-str) to justify that <code>F</code> cannot depend on
		<code>de_v</code> assumptions. In Beluga, the programmer uses strengthening by stating which
		assumptions <code>F</code> can depend on. The coverage checker will then subsequently rely on
		subordination to verify that the restricted case is sufficient and no other cases have been
		forgotten. Subordination allows us to verify that indeed assumptions of type
		<code>de_v: deq x x</code> cannot be used in proofs for <code>aeq M[.., b.1] N[.., b.1]</code>.
		Finally, we use <code>F</code> to assemble the final result <code>ae_l (\\x.\\v. F)</code>.
	</p>
	<p>
		We conclude this example with a few observations: The statement of the theorem is directly and
		succinctly represented in Beluga using contextual types and contextual objects. Every case in
		the on-paper proof corresponds directly to a case in the implementation of the recursive
		function. Type reconstruction is used to reconstruct implicit type arguments and infer the type
		of free contextual variables that occur in patterns. This is crucial to achieve a palatable
		source language. Weakening and strengthening are supported in Beluga through the typing rules
		and on the level of context variables and context schemas using context subsumption. If schema
		<code>W</code> is a prefix of a schema <code>W'</code>, then we can always use a context of
		schema <code>W'</code> in place of a context of schema <code>W</code>.
	</p>
</div>
`;function _(d){let e,n,t,s,o="Download the code";return{c(){e=i(),n=new h(!1),t=i(),s=x("a"),s.textContent=o,this.h()},l(a){u("svelte-1lzvve8",document.head).forEach(p),e=b(a),n=w(a,!1),t=b(a),s=k(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(s)!=="svelte-4kv22j"&&(s.textContent=o),this.h()},h(){document.title="Algorithmic Equality for the Untyped Lambda-calculus (Generalized context version)",n.a=t,v(s,"class","btn btn-lg btn-primary mb-4"),v(s,"href","https://github.com/Beluga-lang/Beluga/blob/master/examples/literate_beluga/0Beginner/Untyped_Algorithmic_Equality_-_Context_Subsumption.bel")},m(a,l){r(a,e,l),n.m(g,a,l),r(a,t,l),r(a,s,l)},p:c,i:c,o:c,d(a){a&&(p(e),n.d(),p(t),p(s))}}}class D extends m{constructor(e){super(),y(this,e,null,_,f,{})}}export{D as component};
