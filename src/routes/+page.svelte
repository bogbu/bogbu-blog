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
	<button on:click={google}>
		google login
	</button>
	<button on:click={getUser}>
		get user
	</button>
	<img src={user.user_metadata.avatar_url} alt=""/>
</section>

<style>

</style>
