<script lang="ts">
	import {supabase} from "$lib/supabase";
	import type {User} from "@supabase/supabase-js";
	const google = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline',
					prompt: 'consent',
				},
			},
		});
	}
	let user:User;
	const getUser = async () => {
		const {data, error} = await supabase.auth.getUser();

		if(data.user) user = data.user;
		console.log(data,"error")
	}
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
		<img src={user.user_metadata.avatar_url} alt="user.user_metadata.avatar_url"/>
	{/if}
</section>

<style>

</style>
