<script lang="ts">
	import {getUser, google} from "$lib/auth";
	import UserStore from "../store/user";
	import type {User} from "@supabase/supabase-js";
	let user : User;
	UserStore.subscribe(value => {
		user = value;
	})

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	Test
	asdasdasd
	테스트
	<button on:click={google}>
		google login
	</button>
	<button on:click={getUser}>
		get user
	</button>
	{#if user}
		<img src={user.user_metadata.avatar_url} alt=""/>
	{/if}
</section>

<style>

</style>
