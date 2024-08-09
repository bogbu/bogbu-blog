<script lang="ts">
	import Header from './_component/Header.svelte';
	import './styles.css';
	import '../lib/font/font.css';
	import {onMount} from "svelte";
	import {getUser} from "$lib/auth";
	import DragStart from "$lib/utils/draggable/DragStart.svelte";
	onMount(() => {
		getUser();
	})
</script>

<div class="app flex-col md:flex-row flex">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		main {
			flex: 1;
		}
	}
</style>
