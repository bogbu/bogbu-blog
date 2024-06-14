<script lang="ts">
import {mockList} from "$lib/mock/mockList";
import WindowFrame from "./_component/WindowFrame.svelte";
import DragStart from "$lib/utils/draggable/DragStart.svelte";
import {drop} from "$lib/utils/draggable/dnd";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex">
	<article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%]" on:drop={(e)=>{console.log(e,"e");drop({dataTransfer: e.dataTransfer, currentTarget : e.currentTarget})}}>
		{#each mockList as item, i}
			<div draggable="true" role="listitem" class="bg-white shadow-md p-4 min-h-[250px] rounded-lg">
				{@html item}
			</div>
		{/each}
	</article>
	<article class="flex-1">
		<DragStart>
			<WindowFrame>
				test1
			</WindowFrame>
		</DragStart>
	</article>
</section>

<style>

</style>
