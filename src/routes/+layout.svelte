<script>
	import '../app.postcss';

	import { base } from '$app/paths';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

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
			display: 'Documentation',
			href: `${base}/documentation`
		},
		{
			display: 'Case Studies',
			href: `${base}/casestudies`
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
