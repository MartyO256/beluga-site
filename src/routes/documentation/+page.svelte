<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Beluga Documentation</title>
</svelte:head>

<h1>Documentation</h1>

<p>
	If you have trouble discerning Beluga code from older releases, consult the <a
		href="{base}/changes">legacy syntax</a
	> for clarification.
</p>

<h2>Guides:</h2>

<ul>
	<li><a href="{base}/userguide2/userguide.pdf">Beluga reference guide</a></li>
	<li>
		<a href="https://complogic.cs.mcgill.ca/tutorial.pdf"
			>Beginner's Guide to Programming in Beluga</a
		>
	</li>
	<li><a href="{base}/casestudies#0Beginner">For Beginners</a></li>
	<li><a href="{base}/casestudies#1Intermediate">For Intermediate Users</a></li>
	<li><a href="{base}/casestudies#2Advanced"> For Advanced Users</a></li>
</ul>

<h2>Tutorials:</h2>

<ul>
	<li>
		<a href="http://complogic.cs.mcgill.ca/icfp2018/index.html"
			>Beluga: Programming Proofs About Formal Systems</a
		> (ICFP-18 Tutorial), September 2018
	</li>

	<li>
		<a href="{base}/beluga-tutorial.pdf">Mechanizing Meta-Theory in Beluga</a> (CADE-25 Tutorial), August
		2015
	</li>
	<li>
		<a href="meta.pdf">Mechanizing Types and Programming Languages: A Companion</a> (Draft from 24
		July, 2015): This is a companion that loosely follows B. Pierce's book "Types and Programming
		Languages" and shows how to mechanize the material in Beluga. The code to the companion is
		available on GitHub (see
		<a href="https://github.com/Beluga-lang/Meta/tree/master/beluga-code">beluga-code</a>)
		<br />
		For an up-to-date version or to contribute see our
		<a href="https://github.com/Beluga-lang/Meta">GitHub</a>
		repository.
	</li>
</ul>

<h2>Overview Talks:</h2>

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

<h2>Publications</h2>

<p>
	For more readings please visit Prof. Brigitte Pientka's publications here: <a
		href="https://www.cs.mcgill.ca/~bpientka/research.html"
		>https://www.cs.mcgill.ca/~bpientka/research.html</a
	>.
</p>

<!--
    <p>
        Each publication employs Beluga syntax for the most recent release at time of writing. If you have
        trouble discerning Beluga code from older releases, consult the <a
            href="{base}/changes">legacy syntax</a
        > for clarification.
    </p>
    <ul>
        <li>
            Jonas Kaiser, Brigitte Pientka, and Gert Smolka. <a href="papers/sysf-pts.pdf"
                >Relating System F and Lambda2: A Case Study in Coq, Abella, and Beluga</a
            >, 2nd International Conference on Formal Structures for Computation and Deduction (FSCD'17);
            more details, in particular the code for each case study can be found in the
            <a href="https://www.ps.uni-saarland.de/extras/fscd17/">online repository</a>.
        </li>
        <li>
            Aina Linn Georges, Agata Murawska, Shawn Otis, Brigitte Pientka. <a
                href="papers/esop17_lincx.pdf">Lincx: A Linear Logical Framework with First-Class Contexts</a
            >, 26th European Symposium on Programming (ESOP'17), 2017
        </li>
        <li>
            Francisco Ferreira, Brigitte Pientka. <a href="papers/esop17_ferreira.pdf"
                >Programs Using Syntax with First-Class Binders</a
            >, 26th European Symposium on Programming (ESOP'17), 2017
        </li>
        <li>
            Amy Felty, Alberto Momigliano, Brigitte Pientka. <a href="papers/mscs17-benchmark.pdf"
                >Benchmarks for Reasoning with Syntax Trees Containing Binders and Contexts of Assumptions</a
            > accepted in Mathematical Structures in Computer Science (MSCS), 2017.
        </li>
        <li>
            David Thibodeau, Andrew Cave, Brigitte Pientka. <a href="papers/indexed_codata.pdf"
                >Indexed Codata Types</a
            > (submitted March 2016), International Conference on Functional Programming (ICFP'16)
        </li>

        <li>
            Rohan Jacob-Rao, Andrew Cave and Brigitte Pientka. <a href="papers/lfmtp16.pdf"
                >Mechanizing Proofs about Mendler-Recursion</a
            >, 11th Workshop Logical Frameworks and Meta-languages (LFMTP'16): Theory and Practice, 2016
        </li>

        <li>
            Brigitte Pientka, Andrew Cave.
            <a href="http://www.cs.mcgill.ca/~acave1/papers/inductive_beluga.pdf"
                >Inductive Beluga: Programming Proofs (System Description)</a
            >, CADE-25, 2015.
        </li>
        <li>
            Andrew Cave and Brigitte Pientka. <a href="https://www.cs.mcgill.ca/~acave1/papers/logrel15.pdf"
                >A Case Study on Logical Relations using Contextual Types</a
            >, LFMTP'15
        </li>

        <li>
            Brigitte Pientka, Andreas Abel.
            <a href="www.cs.mcgill.ca/~bpientka/papers/wfrec-dep.pdf"
                >Structural Recursion over Contextual Objects</a
            >, (<a href="www.cs.mcgill.ca/~bpientka/papers/wfrec-dep-long.pdf">Long version</a>), (Draft
            from Feb 2015), TLCA'15, 2015
        </li>
        <li>
            Amy Felty, Alberto Momigliano, Brigitte Pientka. <a
                href="https://www.cs.mcgill.ca/~bpientka/papers/orbi-survey-nov2015.pdf"
                >The Next 700 Challenge Problems for Reasoning with Higher-Order Abstract Syntax
                Representations: Part 2 - A Survey</a
            >
            (including the
            <a href="www.cs.mcgill.ca/~bpientka/papers/orbi-eappendix.pdf">electronic appendix</a>), Journal
            of Automated Reasoning, 55(4): 307-372, 2015.
        </li>

        <li>
            Olivier Savary-Belanger, Stefan Monnier and Brigitte Pientka. Programming type-safe
            transformations using higher-order abstract syntax, <a
                href="https://www.cs.mcgill.ca/~bpientka/papers/jfr-archive.zip">pdf + Beluga code</a
            >, Journal of Formalized Reasoning. 8(1): 49-91, 2015. (This is the long and revised version of
            the CPP'13 paper)
        </li>
        <li>
            Andreas Abel, Brigitte Pientka, Anton Setzer, David Thibodeau. <a
                href="https://www.cs.mcgill.ca/~bpientka/papers/copat-compilation.pdf"
                >Unnesting of Copatterns</a
            >, Joint 25th International Conference on Rewriting Techniques and Applications and 12th
            International Conference on Typed Lambda Calculi and Applications (RTA-TLCA'14), LNCS 8560,
            pages 31-45, Springer, 2014.
        </li>
        <li>
            Amy Felty, Alberto Momigliano, Brigitte Pientka. <a href="papers/orbi-jar-nov2015.pdf"
                >The Next 700 Challenge Problems for Reasoning with Higher-Order Abstract Syntax
                Representations: Part 1 - A Common Infrastructure</a
            >, CoRR abs/1503.06095, 2015.
        </li>
        <li>
            Andreas Abel and Brigitte Pientka. <a href="https://www.cs.mcgill.ca/~bpientka/papers/jfp15.pdf"
                >Well-founded Recursion with Copatterns and Sized Types</a
            >, Extended journal version of the ICFP'13 conference paper, Journal of Functional Programming,
            2016, vol. 26.
        </li>

        <li>
            Francisco Ferreira, Brigitte Pientka, <a
                href="http://www.cs.mcgill.ca/~bpientka/papers/reconstruction-long.pdf"
                >Bidirectional Elaboration of Dependently Typed Programs</a
            >, PPDP'14 (long version including soundness proof)
        </li>
        <li>
            Anton Setzer, Andreas Abel, Brigitte Pientka and David Thibodeau. <a
                href="http://www.cs.mcgill.ca/~bpientka/papers/copat-compilation.pdf"
                >Unnesting of Copatterns</a
            >, TLCA'14
        </li>
        <li>
            Andrew Cave, Francisco Ferreira, Prakash Panangaden, and Brigitte Pientka. <a
                href="http://www.cs.mcgill.ca/~bpientka/papers/ltl.pdf">Fair reactive programming</a
            >, 41th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages (POPL'14), (<a
                href="http://www.cs.mcgill.ca/~bpientka/papers/ltl-long.pdf">Long version</a
            >).
        </li>
        <li>
            Olivier Savary-Belanger, Stefan Monnier and Brigitte Pientka.
            <a href="http://www.cs.mcgill.ca/~complogic/beluga/papers/tp-compile.pdf"
                >Programming type-safe transformations using higher-order abstract syntax</a
            >, 3rd International Conference on Certified Programs and Proofs (CPP'13). (<a href="cc-code"
                >code</a
            >)
        </li>
        <li>
            Francisco Ferreira, Stefan Monnier, Brigitte Pientka.
            <a href="http://www.cs.mcgill.ca/~bpientka/papers/plpv04-ferreira.pdf"
                >Compiling contextual objects: Bringing Higher-Order Abstract Syntax to Programmers</a
            >, 7th ACM SIGPLAN Workshop on Programming Languages meets Program Verification (PLPV'13).
        </li>
        <li>
            Andreas Abel, Brigitte Pientka, David Thibodeau, Anton Setzer.
            <a href="http://www.cs.mcgill.ca/~bpientka/papers/popl170-abel.pdf"
                >Copatterns: Programming Infinite Structures by Observations</a
            >, 40th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages (POPL'13)
        </li>
        <li>
            Brigitte Pientka. <a href="http://www.cs.mcgill.ca/~bpientka/papers/recon-jfp.pdf"
                >An insider's look at LF type reconstruction:Everything you (n)ever wanted to know</a
            >, Journal of Functional Programming, Jan 2013
        </li>
        <li>
            Andrew Cave and Brigitte Pientka. <a
                href="http://www.cs.mcgill.ca/~complogic/beluga/papers/lfmtp13.pdf"
                >First-class substitutions in contextual type theory</a
            >, International Workshop on Logical Frameworks and Meta-Languages: Theory and Practice
            (LFMTP'13).
        </li>
        <li>
            Brigitte Pientka.
            <a href="http://complogic.cs.mcgill.ca/beluga/submitted/cover-cpp.pdf"
                >Coverage checking contextual objects</a
            >, draft June 2012, (<a
                href="http://complogic.cs.mcgill.ca/beluga/submitted/beluga-coverage-examples.tar"
                >tar-ball with Beluga examples</a
            >)
        </li>
        <li>
            Andrew Cave and Brigitte Pientka.
            <a href="http://complogic.cs.mcgill.ca/beluga/papers/recursive-types.pdf"
                >Programming with Binders and Indexed Data-types</a
            >, 39th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages (POPL'12).
        </li>
        <li>
            Mathieu Boespflug and Brigitte Pientka.
            <a href="http://www.cs.mcgill.ca/~complogic/beluga/papers/multilevelcmtt.pdf"
                >Multi-level Contextual Type Theory</a
            >, 6th International Workshop on Logical Frameworks and Meta-Languages: Theory and Practice
            (LFMTP'11) (<a href="https://www.cs.mcgill.ca/~bpientka/papers/multilevelcmtt-long.pdf"
                >long version</a
            >).
        </li>
        <li>
            Andreas Abel and Brigitte Pientka.
            <a href="http://www.cs.mcgill.ca/~complogic/beluga/papers/unif-sigma-final.pdf"
                >Higher-order dynamic pattern unification for dependent types and records</a
            >, 10th Conference on Typed Lambda Calculi and Applications (TLCA'11). (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/papers/unif-sigma-long.pdf">long version</a
            >)
        </li>
        <li>
            Brigitte Pientka and Joshua Dunfield. Covering all bases: design and implementation of case
            analysis for contextual objects.
            <i>Technical report, Oct 2010</i>. (<a
                href="http://complogic.cs.mcgill.ca/beluga/submitted/cover.pdf">pdf</a
            >, <a href="http://complogic.cs.mcgill.ca/beluga/coverage_appendix">electronic appendix</a>,
            <a href="http://complogic.cs.mcgill.ca/beluga/coverage_appendix.tar.gz"
                >electronic appendix (tar-ball)</a
            >)
        </li>

        <li>
            Amy Felty and Brigitte Pientka. Reasoning with Higher-Order Abstract Syntax and Contexts: A
            Comparison. In <i>First International Conference on Interactive Theorem Proving (ITP'10)</i>,
            Lecture Notes in Computer Science (LNCS), vol 6172, page 227-242, Springer, 2010. (<a
                href="itp10/abstract.html">abstract</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/itp10/worlds-rev.pdf">pdf</a>) (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/itp10/appendix.pdf">appendix</a
            >)
        </li>

        <li>
            Brigitte Pientka and Joshua Dunfield. Beluga: A Framework for Programming and Reasoning with
            Deductive Systems (System Description). In <i
                >5th International Joint Conference on Automated Reasoning (IJCAR'10)</i
            >, Lecture Notes in Computer Science (LNCS), vol 6173, page 15-21, Springer, 2010. (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/ijcar10/abstract.html">abstract</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/ijcar10/system-description.pdf">pdf</a>)
        </li>

        <li>
            Andreas Abel and Brigitte Pientka. Explicit substitutions for contextual type theory. In <i>
                5th International Workshop on Logical Frameworks: Theory and Practice (LFMTP'10)</i
            >, Electronic Proceedings in Theoretical Computer Science (EPCS), vol 34, page 5 - 21, 2010. (<a
                href="http://arxiv.org/html/1009.2189">electronic version of proceeding</a
            >) (<a href="lfmtp10/abstract.html">abstract</a>) (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/lfmtp10/lfmtp10.pdf">pdf</a
            >) (<a href="http://complogic.cs.mcgill.ca/beluga/lfmtp10"
                >Implementation of type-checker in Haskell</a
            >)
        </li>
        <li>
            Brigitte Pientka.
            <a href="http://www.cs.mcgill.ca/~complogic/beluga/papers/prog-proofs.pdf"
                >Programming inductive proofs: a new approach based on contextual types</a
            >, Brigitte Pientka, Verification, Induction, and Termination analysis, Lecture Notes in
            Artificial Intelligence (LNAI), Springer, 2010
        </li>
        <li>
            Brigitte Pientka. Beluga: programming with dependent types, contextual data, and contexts
            (Invited talk). In <i
                >10th International Symposium on Functional and Logic Programming (FLOPS'10)</i
            >, Lecture Notes in Computer Science (LNCS), vol 6009, page 1-12, Springer, 2010. (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/flops10/abstract.html">abstract</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/flops10/flops.pdf">pdf</a>)
        </li>

        <li>
            Brigitte Pientka and Joshua Dunfield. Programming with proofs and explicit contexts. In <i
                >ACM SIGPLAN Symposium on Principles and Practice of Declarative Programming (PPDP'08)</i
            >, pages 163-173. ACM Press, July 2008. (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/ppdp08/abstract.html">abstract</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/ppdp08/Pientka08_dependent-hoas.pdf"
                >pdf</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/ppdp08/bibtex.bib">bibtex</a>)
        </li>

        <li>
            Joshua Dunfield and Brigitte Pientka. Case analysis of higher-order data. In <i
                >International Workshop on Logical Frameworks and Meta-Languages: Theory and Practice
                (LFMTP'08)</i
            >. Elsevier, June 2008. (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/lfmtp08/abstract.html">abstract</a
            >) (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/lfmtp08/Dunfield08_case-analysis-hoas.pdf"
                >pdf</a
            >&mdash;extended version including appendix) (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/lfmtp08/bibtex.bib">bibtex</a
            >)
        </li>

        Joshua Dunfield and Brigitte Pientka. Case analysis of higher-order data. Manuscript, February
        2008. (<a href="http://www.cs.mcgill.ca/~complogic/beluga/tphols08-draft/abstract.html"
            >abstract</a
        >) (<a
            href="http://www.cs.mcgill.ca/~complogic/beluga/tphols08-draft/Dunfield08_case-analysis-hoas.pdf"
            >pdf</a
        >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/tphols08-draft/bibtex.bib">bibtex</a>)

        <li>
            Brigitte Pientka. A type-theoretic foundation for programming with higher-order abstract syntax
            and first-class substitutions. In
            <i>35th ACM Symposium on Principles of Programming Languages (POPL'08)</i>, pages 371-382. ACM
            Press, January 2008. (<a href="http://www.cs.mcgill.ca/~complogic/beluga/popl08/abstract.html"
                >abstract</a
            >) (<a href="http://www.cs.mcgill.ca/~complogic/beluga/popl08/Pientka08_hoasfun.pdf">pdf</a>) (<a
                href="http://www.cs.mcgill.ca/~complogic/beluga/popl08/bibtex.bib">bibtex</a
            >)
        </li>
    </ul>
-->
