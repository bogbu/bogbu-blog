<script lang="ts">
    import WindowFrame from "./WindowFrame.svelte";
    import {toggleShowContent} from "$lib/store/showContentStore";
    import IsLoading from "./IsLoading.svelte";

    export let title: string = "";
    export let loading = false;
</script>
<section class="flex flex-col gap-3">
    <WindowFrame onHandleClosed={toggleShowContent} title={title}>
        <article class="w-full flex flex-col items-center justify-center">
            <IsLoading isLoading={loading}>
                <slot/>
            </IsLoading>
        </article>
    </WindowFrame>
</section>
