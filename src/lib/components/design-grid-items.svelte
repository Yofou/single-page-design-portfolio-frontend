<script lang="ts">
	export let href = ""
	export let label: string
	export let src: string
</script>

<a 
	{href} 
	class="w-full h-full rounded-[8px] grid grid-cols-1 grid-rows-[max-content,1fr] items-end text-left p-6 font-bold font-jaka text-[24px] text-[white] {$$props.class}"
>
	<img class="place-self-end" {src} alt="">
	{label}
</a>
