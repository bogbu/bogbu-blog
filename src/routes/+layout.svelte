<script lang="ts">
	import Header from './_component/Header.svelte';
	import './styles.css';
	import '../lib/font/font.css';
	import {onMount} from "svelte";
	import {getUser} from "$lib/auth";
	onMount(() => {
		getUser();
	})
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

</div>

<style lang="scss">

</style>
