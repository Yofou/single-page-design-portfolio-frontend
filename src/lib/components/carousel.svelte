<script lang="ts">
	import embla from "svelte-embla"
	import type { EmbaOptionsActionType } from "svelte-embla"
	import { writable } from "svelte/store";

	export let store: EmbaOptionsActionType["store"] = writable()
</script>

<div class="overflow-hidden w-full" use:embla={{ dragFree: true, align: "center", containScroll: 'keepSnaps', store }}>
	<div class="grid embla-inner w-full h-full grid-flow-col auto-cols-[270px] md:auto-cols-[570px] gap-[30px] grid-rows-[max-content] md:grid-rows-[360px] relative">
		<img src="Bitmap-1.png" alt="">
		<img src="Bitmap-2.png" alt="">
		<img src="Bitmap-3.png" alt="">
		<img src="Bitmap-4.png" alt="">
		<img src="Bitmap-5.png" alt="">
	</div>
</div>

<style>
	.embla-inner img {
		@apply rounded-[10px] h-full;
	}
</style>
