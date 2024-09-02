<!-- src/routes/_component/Clock.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const time = writable('');

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        time.set(`${hours}:${minutes}`);
    }

    onMount(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    });
</script>

<div class="clock">
    <span>{$time}</span>
</div>

<style lang="scss">
  .clock {
    background-color: #c0c0c0;
    //border: 2px solid #fff;
    //border-top: 2px solid #808080;
    //border-left: 2px solid #808080;
    padding: 2px 5px;
    margin-right: 2px;
    font-family: 'dungGeunMo', serif;
    font-size: 16px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
