<script lang="ts">
    import Header from './_component/Header.svelte';
    import './styles.css';
    import '../lib/font/font.css';
    import {onMount} from "svelte";
    import {getUser} from "$lib/auth";
    import TaskBar from "./_component/TaskBar.svelte";

    onMount(() => {
        getUser();
    })
</script>

<div class="app flex-col md:flex-row flex gap-3 relative p-3 md:p-10">
    <Header/>
    <main>
        <slot/>
    </main>
    <TaskBar/>
</div>

<style lang="scss">
  @import '../lib/color/color.scss';

  .app {
    background: #817978;
    height: 100vh;
    overflow: hidden;

    main {
      flex: 1;
		padding-bottom: 40px;
    }
  }

  /* Custom scrollbar styles for Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: $secondary-color $secondary-color;
    scrollbar-arrow-color: $secondary-color;
    transition: 0.2s;
  }

  *:hover {
    scrollbar-color: #fff $secondary-color;
  }
</style>
