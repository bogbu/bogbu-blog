<script lang="ts">
	import {supabase} from "$lib/supabase";
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

</section>

<style>

</style>
