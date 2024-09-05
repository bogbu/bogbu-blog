<script lang="ts">
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import WindowFrameLayout from "../../_component/WindowFrameLayout.svelte";
    import type {Posts, Profile} from "$lib/types/Posts";
    import {fetchProfile, getPost} from "$lib/post";
    import {get} from "svelte/store";
    import {marked} from "marked";

    let profile: Profile;
    let isLoading: boolean = false;
    let params = "";
    const getProfile = async (id: string) => {
        const res = await fetchProfile(id);
        return res;
    }

    onMount(async () => {
        isLoading = true;
        const id = get(page).params.id;
        const route = get(page).url.pathname;
        if (route) params = route;
        const result = await getProfile(id);
        profile = result[0];
        isLoading = false;
    });
</script>

<WindowFrameLayout loading={isLoading} title={`${params}.svelte`}>
    {#if profile}
        <div>
            <h1>{profile.username}</h1>
            <p>{@html marked(profile.explanation)}</p>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</WindowFrameLayout>
