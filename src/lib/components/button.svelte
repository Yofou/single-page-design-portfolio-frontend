<script lang="ts">
	export let isLink = false
	export let href = ""
</script>

{#if isLink}
	<a class="button {$$props.class ?? ''}" {href}>
		<slot />
	</a>
{:else}	
	<button class="button {$$props.class ?? ''}">
		<slot />
	</button>
{/if}

<style lang="scss">
	.button {
		@apply px-[27px] md:px-[45px] py-[10px] md:py-[14px] rounded-full;
	}
</style>
