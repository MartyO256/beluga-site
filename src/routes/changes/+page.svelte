<svelte:head>
	<title>Beluga Syntax Changes</title>
</svelte:head>

<h1>Legacy Syntax</h1>

<p>
	Beluga is major research project, constantly undergoing development. Over the years we've made
	many changes to the language's syntax. We've outlined some of the obsolete syntax you may
	encounter in older publications.
</p>

<table class="table">
	<thead>
		<tr>
			<th>Year</th>
			<th>Release</th>
			<th>Old Syntax</th>
			<th>New Syntax</th>
			<th>Expression</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>2008</td>
			<td>0.1</td>
			<td><code>box(g. x)</code></td>
			<td><code>[g |- x]</code></td>
			<td
				>Contextual object where <code>g</code> : context variable, <code>x</code> : variable bound
				in <code>g</code></td
			>
		</tr>
		<tr>
			<td>2008</td>
			<td>0.1</td>
			<td><code>all A:t</code></td>
			<td><code>{`{A:t}`}</code></td>
			<td>Universal quantification where <code>A</code> : meta-variable, <code>t</code> : type</td>
		</tr>
		<tr>
			<td>2008</td>
			<td>0.1</td>
			<td><code>M[id, x]</code></td>
			<td><code>M .. x</code></td>
			<td
				>Delayed substitution where <code>M</code> : meta-variable, <code>..</code>, <code>id</code>
				: identity substitution, <code>x</code> : bound variable</td
			>
		</tr>
		<tr>
			<td>2008</td>
			<td>0.1</td>
			<td><code>ctx schema gCtx</code></td>
			<td><code>schema gCtx</code></td>
			<td>Schema declaration where <code>gCtx</code> : schema identifier</td>
		</tr>
		<tr>
			<td>2010</td>
			<td>0.3</td>
			<td><code>(obj T)[g]</code></td>
			<td><code>[g |- obj T]</code></td>
			<td
				>Contextual object where <code>g</code> : context variable, <code>obj</code> : LF
				constructor, <code>T</code> : meta-variable</td
			>
		</tr>
		<tr>
			<td>2010</td>
			<td>0.3</td>
			<td><code>{`{g:(ctx)*}`}</code></td>
			<td><code>{`{g: ctx}`}</code></td>
			<td
				>Universal quantification where <code>g</code> : context variable, <code>ctx</code> : schema</td
			>
		</tr>
		<tr>
			<td>2012</td>
			<td>0.5</td>
			<td><code>[g. obj T]</code></td>
			<td><code>[g |- obj T]</code></td>
			<td
				>Contextual object where <code>g</code> : context variable, <code>obj</code> : LF
				constructor, <code>T</code> : meta-variable</td
			>
		</tr>
		<tr>
			<td>2014</td>
			<td>0.5</td>
			<td><code>{`{#S:g[h]}`}</code></td>
			<td><code>{`{#S: [h |- g]}`}</code></td>
			<td
				>Universal quantification where <code>#S</code> : substitution variable, <code>g</code> :
				domain, <code>h</code> : range</td
			>
		</tr>
		<tr>
			<td>2014</td>
			<td>0.5</td>
			<td><code>#S[]</code></td>
			<td><code>#S[^]</code></td>
			<td>Empty subst. closure where <code>#S</code> : substitution variable</td>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>[g |- M ..]</code></td>
			<td><code>[g |- M[..]]</code></td>
			<td>Meta-variables are associated with explicit substitutions</td>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>[g |- M[..]]</code></td>
			<td><code>[g |- M]</code></td>
			<td
				>Meta-variables are associated with explicit substitutions; they can be omitted as long as
				they are identity substitutions</td
			>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>[g |- M ]</code></td>
			<td><code>[g |- M[^]]</code></td>
			<td
				>Meta-variables are associated with explicit substitutions; they must now be associated with
				a weakening substitution indicating <code>M</code> is closed</td
			>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>datatype tm : type = ...</code></td>
			<td><code>LF tm : type = ... </code></td>
			<td>Distinguish between LF, inductive, and stratified data types.</td>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>datatype Tm : ctype = ...</code></td>
			<td><code>inductive Tm : ctype = ... </code></td>
			<td>Distinguish between LF, inductive, and stratified data types.</td>
		</tr>
		<tr>
			<td>2015</td>
			<td>0.8.2</td>
			<td><code>datatype Tm : ctype = ...</code></td>
			<td><code>{`stratified Tm : [|- tp] -> ctype = ...`}</code></td>
			<td>Distinguish between LF, inductive, and stratified data types.</td>
		</tr>

		<tr>
			<td>2018</td>
			<td>0.8.2</td>
			<td>
				<code>
					%{`{`}coverage, warncoverage, <br />
					nostrengthen, infix, prefix, assoc, <br />
					name, abbrev, not, open{`}`} ...
				</code>
			</td>
			<td>
				<code
					>--{`{`}coverage, warncoverage, <br />
					nostrengthen, infix, prefix, assoc, <br />
					name, abbrev, not, open{`}`} ...
				</code>
			</td>
			<td>
				Pragmas use <code>--</code> instead of <code>%</code> (different syntax for pragmas and comments)
			</td>
		</tr>

		<tr>
			<td>2023</td>
			<td>1.1</td>
			<td>
				<code>$σ' : [g |- $σ, M]</code>
			</td>
			<td>
				<code>$σ' : $[g |- $σ, M]</code>
			</td>
			<td>
				Substitution types and objects require a <code>$</code> prefix.
			</td>
		</tr>

		<tr>
			<td>2023</td>
			<td>1.1</td>
			<td>
				<code>$σ' : [g |-# $σ, M]</code>
			</td>
			<td>
				<code>$σ' : $[g |-# $σ, M]</code>
			</td>
			<td>
				Renaming substitution types and objects require a <code>$</code> prefix.
			</td>
		</tr>

		<tr>
			<td>2023</td>
			<td>1.1</td>
			<td>
				<code>#p : [g |- tp]</code>
			</td>
			<td>
				<code>#p : #[g |- tp]</code>
			</td>
			<td>
				Parameter types and variables require a <code>#</code> prefix.
			</td>
		</tr>

		<tr>
			<td>2023</td>
			<td>1.1</td>
			<td>
				<code>tl stream</code>
			</td>
			<td>
				<code>stream .tl</code>
			</td>
			<td> Destructors for coinductive type families use postfix notation. </td>
		</tr>
	</tbody>
</table>
