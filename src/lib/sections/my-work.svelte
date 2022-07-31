<script lang="ts">
	import CarouselButton from "$lib/components/carousel-button.svelte";
	import Carousel from "$lib/components/carousel.svelte";
	import type { EmbaOptionsActionType } from "svelte-embla";

	let store: EmbaOptionsActionType["store"]
	
	const onLeft = () => $store?.canScrollPrev() && $store?.scrollPrev();
	const onRight = () => $store?.canScrollNext() && $store?.scrollNext();
</script>

<section class="w-full grid grid-flow-row gap-[56px] mt-[100px] md:mt-[120px] lg:mt-[88px] justify-items-center">
	<h2 class="text-heading-s text-black font-bold">My Work</h2>

	<Carousel bind:store />

	<div class="flex gap-4">
		<CarouselButton on:click={onLeft}>
			<img src="/arrow.svg" alt="left-arrow">
		</CarouselButton>
		<CarouselButton on:click={onRight}>
			<img class="rotate-180" src="/arrow.svg" alt="right-arrow">
		</CarouselButton>
	</div>
</section>
