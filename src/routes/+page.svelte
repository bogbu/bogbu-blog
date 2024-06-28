<script lang="ts">
    import {mockList} from "$lib/mock/mockList";
    import WindowFrame from "./_component/WindowFrame.svelte";
    import DragStart from "$lib/utils/draggable/DragStart.svelte";
    import {dragStart, drop} from "$lib/utils/draggable/dnd";
    import {getPost} from "$lib/post";
    import type {Posts} from "$lib/types/Posts";
    import {onMount} from "svelte";
    let posts : Posts[];
    const hovering = (e: { currentTarget: (EventTarget & HTMLElement) }) => {
        console.log(e, "hovering");
        e.currentTarget.style.backgroundColor = "red";
    }
    const hoveringOut = (e: { currentTarget: (EventTarget & HTMLElement) }) => {
        console.log(e, "hoveringOut");
        e.currentTarget.style.backgroundColor = "transparent";
    }
    const getPosts = async () => {
        const res = await getPost();
        // posts
    }
    onMount(() => {
        getPosts();
    });
</script>

<svelte:head>
    <title>drag and drop</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section class="flex">
    <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%]">
        {#each mockList as item, i}
            <div draggable="true" role="listitem" class="bg-white shadow-md p-4 min-h-[250px] rounded-lg"
                 on:dragover={(e)=>{e.preventDefault();  "return false"}} on:dragleave={(e)=>{e.preventDefault; hoveringOut(e)}}
                 on:dragenter={(e)=>{hovering(e);}} on:drop={(e)=>{e.preventDefault;  console.log(e,"e"); drop(e); }}
                on:dragstart={(e)=>{dragStart({currentTarget: e.currentTarget, dataTransfer : e.dataTransfer})}}
            >
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
        <DragStart>
            <WindowFrame>
                test2
            </WindowFrame>
        </DragStart>
        <DragStart>
            <WindowFrame>
                test2
            </WindowFrame>
        </DragStart>
    </article>
</section>

<style lang="scss">

</style>
