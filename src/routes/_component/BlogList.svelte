<script lang="ts">
    import type { Posts } from "$lib/types/Posts";
    import { goto } from "$app/navigation";

    export let posts: Posts[];

    function handlePostClick(id: number) {
        goto(`/posts/${id}`);
    }
</script>

<article>
    {#each posts as post}
        <button on:click={() => handlePostClick(post.id)}>
            <h2>{post.title}</h2>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
        </button>
    {/each}
</article>

<style lang="scss">
  article {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  button {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    transition: 0.2s;
    &:hover {
      background-color: #f0f0f0;
    }
  }
</style>
