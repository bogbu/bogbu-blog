<script lang="ts">
    import type {Posts} from "$lib/types/Posts";
    import WindowFrameLayout from "./_component/WindowFrameLayout.svelte";
    import {onMount} from "svelte";
    import {getPost} from "$lib/post";
    import BlogList from "./_component/BlogList.svelte";
    import SNSList from "./_component/SNSList.svelte";
    import NoteLayout from "./_component/NoteLayout.svelte";
    import NoteList from "./_component/NoteList.svelte";

    let posts: Posts[];
    let isLoading: boolean = false;
    const getPosts = async () => {
        const res = await getPost();
        return res;
    }
    onMount(async () => {
        isLoading = true;
        posts = await getPosts();
        isLoading = false;
    })
</script>

<svelte:head>
    <title>bogbu</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>
<WindowFrameLayout loading={isLoading}>
    <div class="w-full gap-3 flex items-start justify-between">
        <div class="flex-1">
            <SNSList/>
        </div>
        {#if posts}
            <BlogList {posts}/>
        {:else}
            <p>loading...</p>
        {/if}
    </div>
</WindowFrameLayout>
<style lang="scss">

</style>
