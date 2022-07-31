<script>
import { writable } from "svelte/store";
import DesignGridItems from "./design-grid-items.svelte";
export function createCustomStore() {
	return function() {
		const { subscribe } = writable()

		return { 
				...subscribe
		}
	}
}
</script>
<div class="w-full md:w-auto grid grid-cols-2 sm:grid-cols-[repeat(4,minmax(0,155px))] sm:grid-rows-[182px,158px,182px] xl:grid-cols-[repeat(6,minmax(0,164px))] xl:grid-rows-[182px,182px] gap-6 mt-8 md:mt-16 lg:mt-20">
	<DesignGridItems label="Graphic Design" src="/design-1.svg" class="bg-blue-600 row-span-2 col-span-2" />
	<DesignGridItems label="UI/UX" src="/design-2.svg" class="bg-yellow" />
	<DesignGridItems label="Apps" src="/design-3.svg" class="bg-red-300" />
	<DesignGridItems label="Photography" src="/design-4.svg" class="bg-blue-300 col-span-2" />
	<DesignGridItems label="Illustrations" src="/design-5.svg" class="bg-red-600 col-span-2" />
	<DesignGridItems label="Motion Graphics" src="/design-6.svg" class="bg-red-900 col-span-2" />
</div>
