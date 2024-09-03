<script lang="ts">
    import UserStore from "$lib/store/user";
    import type {User} from "@supabase/supabase-js";
    import {google, logout} from "$lib/auth";
    import WindowFrame from "./WindowFrame.svelte";
    import {toggleShowProfile} from "$lib/store/showContentStore";

    let user: User;
    UserStore.subscribe(value => {
        user = value;
    })
</script>

<WindowFrame title="User.svelte" onHandleClosed={toggleShowProfile}>
    <article class="user--profile">
        {#if user.id === ""}
            <p>로그인이 필요합니다.</p>
            <button on:click={google}>
                구글로 로그인
            </button>
        {:else}
            <div class="user--profile__avatar">
                <img src={user.user_metadata.avatar_url} alt=""/>
            </div>
            <p>{user.user_metadata.name} 님</p>
            <p>{user.email}</p>
            <button on:click={logout}>
                로그아웃
            </button>
        {/if}
    </article>
</WindowFrame>


<style lang="scss">
  .user--profile {
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .user--profile__avatar {
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
  }
</style>
