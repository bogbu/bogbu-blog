<script lang="ts">
    import {showProfile, showWeather, showMusic, toggleShowWeather, toggleShowMusic} from "$lib/store/showContentStore";
    import UserProfile from "./UserProfile.svelte";
    import WindowFrame from "./WindowFrame.svelte";
    import Sky from "./lottie/Sky.svelte";
    import Music from "./Music.svelte";
</script>

<header class="flex flex-col gap-3">
    {#if $showProfile}
        <UserProfile/>
    {/if}
    <!--{#if $showMusic}-->
    <WindowFrame title="Music.svelte" className={$showMusic ? "" : "hidden"} onHandleClosed={toggleShowMusic}>
        <div class="w-[200px] h-[200px]">
            <Music/>
        </div>
    </WindowFrame>
    <!--{/if}-->
    <WindowFrame title="Weather.svelte" className={$showWeather ? "":"hidden"} onHandleClosed={toggleShowWeather}>
        <div class="overflow-hidden w-[200px] h-[200px] flex items-center">
            <div>
                <Sky/>
            </div>
        </div>
    </WindowFrame>

</header>

<style lang="scss">
</style>
