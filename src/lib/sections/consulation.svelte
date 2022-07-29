<script>
	import Button from "../components/button.svelte";
</script>

<section class="w-full items-center mt-[136px] flex flex-col md:flex-row gap-[40px] md:gap-[125px] overflow-hidden">
	<img class="w-[445px]" src="/amy.png" alt="Amy">

	<div class="w-full h-full flex flex-col gap-[32px] text-center md:text-left">
		<h2 class="text-heading-m text-black font-bold">
			I’m Amy, and I’d love to work on your next project
		</h2>
		<p class="mt-[2px] text-body font-medium text-grey">
			I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
		</p>
		<Button isLink href="/" class="bg-red-600 hover:bg-yellow transition-colors grid place-content-center self-center md:self-start text-white font-jaka font-bold text-base leading-[28px]">
			Free Consultation
		</Button>
	</div>
</section>
