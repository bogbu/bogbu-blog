<script lang="ts">
    import {showProfile, showWeather, toggleShowWeather} from "$lib/store/showContentStore";
    import UserProfile from "./UserProfile.svelte";
    import WindowFrame from "./WindowFrame.svelte";
    import Sky from "./lottie/Sky.svelte";
</script>

<header class="flex flex-col gap-3">
    {#if $showProfile}
        <UserProfile/>
    {/if}
    {#if $showWeather}
        <WindowFrame onHandleClosed={toggleShowWeather}>
            <div class="overflow-hidden w-[200px] h-[200px] flex items-center">
                <div>
                    <Sky/>
                </div>
            </div>
        </WindowFrame>
    {/if}
</header>

<style lang="scss">
</style>
