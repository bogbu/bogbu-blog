<script lang="ts">
    import {showProfile, showWeather, showMusic, toggleShowWeather} from "$lib/store/showContentStore";
    import UserProfile from "./UserProfile.svelte";
    import WindowFrame from "./WindowFrame.svelte";
    import Sky from "./lottie/Sky.svelte";
    import Music from "./Music.svelte";
</script>

<header class="flex flex-col gap-3">
    {#if $showProfile}
        <UserProfile/>
    {/if}
    {#if $showMusic}
        <WindowFrame>
            <div class="w-[200px] h-[200px]">
                <Music/>
            </div>
        </WindowFrame>
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
