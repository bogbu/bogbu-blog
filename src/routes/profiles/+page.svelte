<script lang="ts">
    import WindowFrameLayout from "../_component/WindowFrameLayout.svelte";
    import {onMount} from "svelte";
    import {fetchProfile} from "$lib/post";
    import type {Profile} from "$lib/types/Posts";
    import {goto} from "$app/navigation";
    import ProfileCard from "../_component/ProfileCard.svelte";

    let profiles: Profile[] = [];
    onMount(async () => {
        const result = await fetchProfile();
        if (result) profiles = result;
    });

    function handlePostClick(id: string) {
        goto(`/profiles/${id}`);
    }
</script>

<WindowFrameLayout loading={false}>
    <article class="grid grid-cols-1 gap-1 md:grid-cols-4 w-full p-3">
        {#each profiles as profile}
            <button class="profile-button" on:click={() => handlePostClick(profile.id)}>
                <ProfileCard {profile}/>
            </button>
        {/each}
    </article>
</WindowFrameLayout>

<style lang="scss">
  .profile-button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: 1px solid #000;
    padding: 10px;
  }
</style>
