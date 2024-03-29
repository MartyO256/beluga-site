<svelte:head>
	<title>Beluga Case Studies</title>
</svelte:head>

<h2 id="0Beginner">Beginner</h2>

<h4>
	<a href="https://complogic.cs.mcgill.ca/tutorial.pdf">Beginner's Guide to Programming in Beluga</a
	>
</h4>

<p>
	This guide is mostly for users who have only a background in functional programming as often
	taught in an undergraduate class. We show how to write some common simple functional programs in
	Beluga and also briefly discuss how to write simple proofs in Beluga.Here are a few sample
	programs discussed in the tutorial to get you started
</p>

<ul>
	<li><a href="tutorial/nat">nat.bel:</a> naturals (Section 2);</li>
	<li><a href="tutorial/yn">yn.bel</a> yes and no (Section 2);</li>
	<li><a href="tutorial/listnat">listnat.bel:</a> Lists of naturals (Section 2);</li>
	<li>
		<a href="tutorial/dtlist">dtlist.bel:</a> length indexed lists (Section 3);
	</li>
	<li>
		<a href="tutorial/typesterms2">typesterms2.bel:</a> list filtering (Section 3);
	</li>
	<li>
		<a href="tutorial/typesterms3">typesterms3.bel:</a> list filtering (Section 3);
	</li>
	<li>
		<a href="tutorial/typesterms">typesterms.bel:</a> evaluation is deterministic (Section 4);
	</li>
	<li>
		<a href="tutorial/lambda">lambda.bel:</a> lambda-calculus and proof of preservation (Section 5).
	</li>
</ul>

<h4><a href="examples/literate_beluga/0Beginner/Close_Terms">Close Terms</a></h4>

<p>
	We build a simple program that closes open terms, converting each free variable to one bound by a
	lambda abstraction. The example demonstrates pattern matching on contexts and Beluga's built-in
	mechanism for variable substitution.
</p>

<!--
    <h4>
        <a href=" ./examples/literate_beluga/0Beginner/Parallel_Reduction.html">Parallel Reduction</a>
    </h4>
    
    <p>
        The order of assumptions in a context is important in Beluga. However, sometimes the need to
        reorder assumptions arises, as is illustrated in the proof of the substitution lemma for
        algorithmic equality. As in Twelf this kind of proof does not come for free in Beluga.
    </p>
-->

<!--
    <h4>
        <a href=" ./examples/literate_beluga/0Beginner/Polymorphic_Algorithmic_Equality.html"
            >Polymorphic Algorithmic Equality</a
        >
    </h4>
    
    <p>
        In order to prove algorithmic equality for a polymorphic lambda-calculus, we establish schemas
        with alternating assumptions, depending on the type of the variable.
    </p>
-->

<h4>
	<a href="examples/literate_beluga/0Beginner/Type_Uniqueness">Type Uniqueness</a>
</h4>

<p>
	Since Beluga does not support equality types, we implement equality using an LF type family as a
	dependent kind. The difficulties of defining equality via reflexivity in Twelf do not arise in
	Beluga. Beluga's proof is implemented as a function using pattern matching instead of relations;
	as we pattern match we learn more about the given derivations and information flows as expected.
</p>

<!--
    <h4>
        <a
            href=" ./examples/literate_beluga/0Beginner/Untyped_Algorithmic_Equality_-_Context_Relation.html"
            >Untyped Algorithmic Equality - Context Relation</a
        >
    </h4>
    
    <p>
        Context relationships can be defined explicitly using inductive datatypes. In this proof we use
        inductive datatypes to establish strengthening and weakening between contexts.
    </p>
-->

<!--
    <h4>
        <a
            href=" ./examples/literate_beluga/0Beginner/Untyped_Algorithmic_Equality_-_Context_Subsumption.html"
            >Untyped Algorithmic Equality - Context Subsumption</a
        >
    </h4>
    
    <p>
        This example demonstrates Beluga's capacity for automatic context subsumption. If schema W is a
        prefix of a schema W0, then we can always use a context of schema W0 in place of a context of
        schema W. Essentially, we allow the user to pass a context of schema W0 where a context with
        schema W if W0 contains at least as much information as W.
    </p>
-->

<h2 id="1Intermediate">Intermediate</h2>

<h4>
	<a href="examples/literate_beluga/1Intermediate/Parallel_Reduction">Parallel Reduction</a>
</h4>

<p>
	The order of assumptions in a context is important in Beluga. However, sometimes the need to
	reorder assumptions arises, as is illustrated in the proof of the substitution lemma for
	algorithmic equality. As in Twelf this kind of proof does not come for free in Beluga.
</p>

<h4>
	<a href="examples/literate_beluga/1Intermediate/Polymorphic_Algorithmic_Equality"
		>Polymorphic Algorithmic Equality</a
	>
</h4>

<p>
	In order to prove algorithmic equality for a polymorphic lambda-calculus, we establish schemas
	with alternating assumptions, depending on the type of the variable.
</p>

<h4><a href="examples/literate_beluga/1Intermediate/Poplmark">Poplmark</a></h4>

<p>
	This example shows a solution of the <a href="http://www.seas.upenn.edu/~plclub/poplmark/"
		>POPLMARK Challenge</a
	> Part 1A, Transitivity of Subtyping.
</p>

<h4>
	<a href="examples/literate_beluga/1Intermediate/Untyped_Algorithmic_Equality_-_Context_Relation"
		>Untyped Algorithmic Equality - Context Relation</a
	>
</h4>

<p>
	Context relationships can be defined explicitly using inductive datatypes. In this proof we use
	inductive datatypes to establish strengthening and weakening between contexts.
</p>

<h4>
	<a
		href="examples/literate_beluga/1Intermediate/Untyped_Algorithmic_Equality_-_Context_Subsumption"
		>Untyped Algorithmic Equality - Context Subsumption</a
	>
</h4>

<p>
	This example demonstrates Beluga's capacity for automatic context subsumption. If schema W is a
	prefix of a schema W0, then we can always use a context of schema W0 in place of a context of
	schema W. Essentially, we allow the user to pass a context of schema W0 where a context with
	schema W if W0 contains at least as much information as W.
</p>

<h2 id="2Advanced">Advanced</h2>

<h4>
	<a href="examples/literate_beluga/2Advanced/Normalization_by_Evaluation"
		>Normalization by Evaluation</a
	>
</h4>

<p>
	A normalization by evaluation algorithm for an intrinsically typed simply-typed lambda calculus.
</p>

<h4>
	<a href="examples/literate_beluga/2Advanced/Weak_Normalization">Weak Normalization</a>
</h4>

<p>
	A proof of weak head normalization for the simply typed lambda calculus using logical relations.
</p>
