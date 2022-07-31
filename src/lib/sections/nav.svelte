<script>
	import Button from "$lib/components/button.svelte";
</script>

<nav aria-label="{$$props['aria-label']}" class="grid grid-cols-[max-content,1fr] mt-[34px] {$$props.class ?? ''}">
	<a href="/">
		<img src="/logo.svg" alt="Design Solution org">
	</a>
		
	<Button isLink href="/" class="bg-black hover:bg-blue-600 transition-colors grid place-content-center self-center justify-self-end text-white font-jaka font-bold text-[14px] md:text-base leading-[28px]">
		Free Consultation
	</Button>
</nav>
