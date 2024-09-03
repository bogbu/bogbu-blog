<script lang="ts">
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import WindowFrameLayout from "../../_component/WindowFrameLayout.svelte";
    import type {Posts} from "$lib/types/Posts";
    import {getPost} from "$lib/post";
    import {get} from "svelte/store";
    import {marked} from "marked";

    let post: Posts;
    let isLoading: boolean = false;
    let params = "";
    const getPosts = async (id: string) => {
        const res = await getPost(id);
        return res;
    }

    onMount(async () => {
        isLoading = true;
        const id = get(page).params.id;
        const route = get(page).url.pathname;
        if (route) params = route;
        const result = await getPosts(id);
        post = result[0];
        isLoading = false;
    });
</script>

<WindowFrameLayout loading={isLoading} title={`${params}.svelte`}>
    {#if post}
        <div>
            <h1>{post.title}</h1>
            <p>{@html marked(post.contents)}</p>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</WindowFrameLayout>
