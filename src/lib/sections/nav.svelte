<script>
	import Button from "$lib/components/button.svelte";
</script>

<nav class="grid grid-cols-[max-content,1fr] mt-[34px] {$$props.class}">
	<img src="/logo.svg" alt="Design Solution org">
		
	<Button isLink href="/" class="bg-black grid place-content-center justify-self-end text-white font-jaka font-bold text-base leading-[28px]">
		Free Consultation
	</Button>
</nav>
