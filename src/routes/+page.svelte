<script lang="ts">
    import WindowFrame from "./_component/WindowFrame.svelte";
    import {getPost} from "$lib/post";
    import type {Posts} from "$lib/types/Posts";
    import {onMount} from "svelte";
    import {showContent, toggleShowContent} from "$lib/store/showContentStore";
    import Loading from "./_component/lottie/Loading.svelte";
    import IsLoading from "./_component/IsLoading.svelte";

    let posts: Posts[];
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
{#if $showContent}
    <section class="flex flex-col gap-3">
        <WindowFrame onHandleClosed={toggleShowContent}>
            <article class="w-full flex items-center justify-center">
                <IsLoading isLoading={false}>
                    test
                </IsLoading>
            </article>
        </WindowFrame>
    </section>
{/if}

<style lang="scss">

</style>
