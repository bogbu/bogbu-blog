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

<div class="app md:grid-cols-1 lg:block flex">
	<main>
		<slot />
	</main>
	<Header />

</div>

<style lang="scss">
	.app {
		main {
			flex: 1;
		}
	}
</style>
