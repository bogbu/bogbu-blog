<script lang="ts">
    import UserStore from "../../store/user";
    import type {User} from "@supabase/supabase-js";
    import {google} from "$lib/auth";
    import WindowFrame from "./WindowFrame.svelte";

    let user: User;
    UserStore.subscribe(value => {
        user = value;
        console.log(value, "user");
    })
</script>

<WindowFrame>
    <article class="user--profile">
        {#if user.id === ""}
            <p>로그인이 필요합니다.</p>
            <button on:click={google}>
                구글로 로그인
            </button>
        {:else}
            <div class="">
                <img src={user.user_metadata.avatar_url} alt=""/>
            </div>
            <p>{user.user_metadata.name} 님</p>
            <p>{user.email}</p>
        {/if}
    </article>
</WindowFrame>


<style lang="scss">
  .user--profile {
    background: #fff;
    color: #000;
  }
</style>