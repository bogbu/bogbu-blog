<script lang="ts">
    import Loading from "./lottie/Loading.svelte";

    export let isLoading = false;
</script>

{#if isLoading}
    <div class="w-[500px]">
        <Loading/>
    </div>
{:else}
    <slot/>
{/if}
