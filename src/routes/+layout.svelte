<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../lib/font/font.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

</div>

<style lang="scss">

</style>
