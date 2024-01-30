<script>
	import katexCss from 'katex/dist/katex.min.css?url';
	import katexAutoRender from 'katex/dist/contrib/auto-render.js?url';
	import katex from 'katex/dist/katex.js?url';
</script>

<svelte:head>
	<link rel="stylesheet" href={katexCss} />

	<script defer src={katex}></script>

	<script defer src={katexAutoRender} onload="renderMathInElement(document.body);"></script>
</svelte:head>
