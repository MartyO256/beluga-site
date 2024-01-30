<script>
	import { base } from '$app/paths';

	import BelugaImage from '$lib/images/beluga-med.png';
</script>

<svelte:head>
	<title>Beluga</title>
</svelte:head>

<div class="px-5 py-3 my-4 bg-light rounded-3 clearfix">
	<img class="float-start" alt="Beluga Logo" src={BelugaImage} />
	<div class="lead">
		Beluga is a functional programming language designed for reasoning about formal systems. It
		features direct support for object-level binding constructs using higher order abstract syntax
		and treats contexts as first class objects.
	</div>
	<div class="list-group list-group-horizontal-md my-2" role="group">
		<a href="#overview" class="list-group-item list-group-item-action" role="button">Overview</a>
		<a href="#installation" class="list-group-item list-group-item-action" role="button"
			>Installation</a
		>
		<a href="documentation" class="list-group-item list-group-item-action" role="button"
			>Documentation</a
		>
	</div>
</div>

<!--
	<p>
		Beluga seperates data from computation providing an expression computation language on top of the
		logical framework LF. Its strength and elegance comes on the one hand from encoding formal systems
		in LF where we represent binders in the object language as binders in LF directly inheriting
		capture-avoiding substitution and renaming of variables. We can reason about LF objects by
		encapsulating the object together with its surrounding context using
		<emph>contextual objects</emph>.
	</p>
	
	<a class="btn btn-primary" href="flops10/flops.pdf" role="button">View details »</a>
	
	<h2>Interactive</h2>
	
	<p>
		Beluga's Interactive mode makes writting proofs a littler easier. Get information about types,
		variables, and holes or output your program as HTML. Integrate with Emacs or use the terminal.
	</p>
	
	<a class="btn btn-primary" href="#overview" role="button">View details »</a>
	
	<h2>Easy to Read</h2>
	
	<p>
		Writing proofs in Beluga is syntactically as it gets to working with pencil and paper. We include
		an Emacs mode with the current distribution to make programs more presentable. A VIM mode is also
		avalaible.
	</p>
	
	<a class="btn btn-primary" href="#" role="button">View details »</a>
-->

<h2 id="overview">Overview</h2>

<p>
	Beluga allows specification of formal systems (such as lambda calculi and type systems) using a
	foundation of contextual modal logic. As in the Twelf system, we can encode object-level binding
	constructs using higher order abstract syntax. We also pair terms with the contexts that give them
	meaning and then reason about these contextual objects. Proofs in Beluga are represented by
	recursive programs according to the Curry-Howard Isomorphism.
</p>
<p>
	Beluga is developed at the Complogic group at McGill University, led by Professor Brigitte
	Pientka. It is implemented in OCaml.
</p>
<p>
	To learn more about Beluga we recommend the following tutorial style papers and talks. If you have
	trouble discerning Beluga code from older releases, consult the <a href="{base}/changes"
		>legacy syntax</a
	> for clarification.
</p>

<h4>Tutorial:</h4>

<ul>
	<li>
		<a href="{base}/beluga-tutorial.pdf">Mechanizing Meta-Theory in Beluga</a> (CADE-25 Tutorial), August
		2015
	</li>
	<li>
		<a href="https://github.com/Beluga-lang/Meta"
			>Mechanizing Types and Programming Languages: A Companion</a
		>: This is a companion that loosely follows B. Pierce's book "Types and Programming Languages"
		and shows how to mechanize the material in Beluga. The code to the companion is available on
		GitHub (see
		<a href="https://github.com/Beluga-lang/Meta/tree/master/beluga-code">beluga-code</a>)
		<br />For an up-to-date version or to contribute see our
		<a href="https://github.com/Beluga-lang/Meta">GitHub</a>
		repository.<br />
	</li>
</ul>

<h4>Overview Talks:</h4>

<ul>
	<li>
		<a href="http://www.cs.mcgill.ca/~bpientka/talks/beluga-mechanize-june15.pdf"
			>Mechanizing Meta-Theory in Beluga</a
		>, 2nd International Workshop on Rewriting Techniques for Program Transformations and Evaluation
		(WPTE 2015), June 2015
	</li>
	<li>
		Programming logical relations proofs, Brigitte Pientka, <a
			href="https://ihp2014.pps.univ-paris-diderot.fr/doku.php?id=workshop_5"
			>Certification of high-level and low-level programs</a
		>, Institut Henri Poincare, Paris, France, June 2014 (<a
			href="http://cs.mcgill.ca/~bpientka/talks/beluga-logrel.pdf">slides</a
		>)
	</li>
	<li>
		Beluga-mu: Programming proofs in context, Brigitte Pientka, POP Seminar, Carnegie Mellon
		University, May 2014 (<a href="http://cs.mcgill.ca/~bpientka/talks/beluga-update-May14.pdf"
			>slides</a
		>)
	</li>
	<li>
		Beluga-mu: Programming proofs in context, Brigitte Pientka, Invited talk at <a
			href="http://people.csail.mit.edu/adamc/lfmtp12/index.html"
			>International Workshop on Logical Frameworks and Meta-Languages: Theory and Practice
			(LFMTP'12)</a
		>. (<a href="http://cs.mcgill.ca/~bpientka/talks/beluga-lfmtp12-updated.pdf">slides</a>)
	</li>
</ul>

<h2 id="installation">Installation</h2>

<p>
	Please refer to the installation guide in the GitHub repository of Beluga:<br />
	<a href="https://github.com/Beluga-lang/Beluga/blob/master/INSTALL">
		https://github.com/Beluga-lang/Beluga/blob/master/INSTALL</a
	>.
</p>

<h2>Funding</h2>

<p>
	This research has been funded through: NSERC (Natural Science and Engineering Research Council),
	FRQNT Recherche d'Équipe, PSR-SIIRI Projets conjoints de recherche et d'innovation and 63e session
	de la Commission permanente de coopération franco-québécoise by Ministère de l'Économie, de
	l'Innovation et de l'Énergie au Quebec.
</p>
