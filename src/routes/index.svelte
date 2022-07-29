<script>
	import Nav from "$lib/sections/nav.svelte";
	import DesignSolutions from "$lib/sections/design-solutions.svelte";
	import Consulation from "$lib/sections/consulation.svelte";
	import ContactMe from "$lib/sections/contact-me.svelte";
</script>

<Nav />
<main>
	<DesignSolutions />
	<Consulation />
	<ContactMe />
	<Nav class="mt-[54px]" />
</main>
