<script>
	import Nav from "$lib/sections/nav.svelte";
	import DesignSolutions from "$lib/sections/design-solutions.svelte";
	import Consulation from "$lib/sections/consulation.svelte";
	import ContactMe from "$lib/sections/contact-me.svelte";
	import MyWork from "$lib/sections/my-work.svelte";
</script>

<header class="sr-only">
	<h1>Single Page Design Portfolio Frontend</h1>
</header>

<Nav aria-label="Primary Consulation navigation" />

<main>
	<DesignSolutions />
	<Consulation />
	<MyWork />
	<ContactMe />
</main>

<footer>
	<Nav aria-label="Secondary Consulation navigation" class="my-[54px]" />
</footer>
