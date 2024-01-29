<script>
	import '../app.postcss';

	import { base } from '$app/paths';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { dev } from '$app/environment';

	export const links = [
		{
			display: 'Home',
			href: `${base}/`
		},
		{
			display: 'Install',
			href: `${base}/#installation`
		},
		{
			display: 'Docs',
			href: `${base}/documentation`
		},
		{
			display: 'People',
			href: `${base}/people`
		},
		{
			display: 'Downloads',
			href: `${base}/downloads`
		}
	];
</script>

<Navbar {links} />

<div class="container mt-4">
	<slot />
	<Footer />
</div>

{#if !dev}
	<script type="text/javascript">
		var sc_project = 5164105;
		var sc_invisible = 1;
		var sc_partition = 49;
		var sc_click_stat = 1;
		var sc_security = '70de7a64';
	</script>

	<script type="text/javascript" src="http://www.statcounter.com/counter/counter.js"></script>
	<noscript
		><div class="statcounter">
			<a
				title="profile counter"
				href="http://www.statcounter.com/free_profile_counter.html"
				target="_blank"
				><img
					class="statcounter"
					src="http://c.statcounter.com/5164105/0/70de7a64/1/"
					alt="profile counter"
				/></a
			>
		</div>
	</noscript>
{/if}
