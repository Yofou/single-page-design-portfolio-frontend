<script>
	import Button from "$lib/components/button.svelte";
</script>

<section class="w-full bg-black rounded-[10px] mt-[100px] md:mt-[120px] lg:mt-[88px] gap-6 text-center md:text-left py-[50px] px-[24px] sm:py-14 sm:px-[75px] md:py-20 md:pl-16 md:pr-24 text-white grid grid-cols-1 md:grid-cols-[1fr,max-content] md:grid-rows-[max-content,1fr]">
	<h2 class="text-heading-s md:text-heading-m font-bold">Book a call with me</h2>
	<p class="text-body text-[16px] md:text-[18px] font-medium max-w-[540px] w-full">
		I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.
	</p>

	<Button class="bg-red-600 hover:bg-yellow transition-colors md:row-start-1 md:row-end-3 text-left md:col-start-2 font-bold md:col-end-3 place-self-center">Free Consultation</Button>
</section>
