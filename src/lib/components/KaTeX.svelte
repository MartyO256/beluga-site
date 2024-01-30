<script>
	import { onMount } from 'svelte';

	import katexCss from 'katex/dist/katex.min.css?url';
	import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';

	onMount(() => {
		renderMathInElement(document.body);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href={katexCss} />
</svelte:head>
