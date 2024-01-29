<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import { clickOutside } from '$lib/actions/clickOutside';

	export let navbarShown = false;

	export let links = [];
</script>

<nav
	class="navbar navbar-expand-lg navbar-light bg-light"
	use:clickOutside
	on:clickOutside={() => {
		if (navbarShown) {
			navbarShown = false;
		}
	}}
>
	<div class="container">
		<a class="navbar-brand" href="{base}/">Beluga</a>
		<button
			class="navbar-toggler"
			type="button"
			aria-controls="navbarSupportedContent"
			aria-expanded={navbarShown}
			aria-label="Toggle navigation"
			on:click={() => {
				navbarShown = !navbarShown;
			}}
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="collapse navbar-collapse {navbarShown ? 'show' : 'collapse'}"
			id="navbarSupportedContent"
		>
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each links as link}
					<li class="nav-item">
						<a
							class="nav-link {$page.url.pathname == link.href ? 'active' : ''}"
							aria-current={$page.url.pathname == link.href ? 'page' : null}
							href={link.href}
							on:click={() => (navbarShown = false)}>{link.display}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
