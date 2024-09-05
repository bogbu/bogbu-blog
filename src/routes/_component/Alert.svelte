<script lang="ts">
    import {onMount} from "svelte";
    import AlertStore from "$lib/store/alert";

    let message: string = "";
    let type: string = "";
    let isShow: boolean = false;
    onMount(() => {
        AlertStore.subscribe((value) => {
            message = value.message;
            type = value.type;
            isShow = value.isShow;
        });
    });
</script>
<div class="alert" class:show={isShow} class:success={type === "success"} class:error={type === "error"}>
    <p>{message}</p>
</div>

<style lang="scss">
  .alert {
    position: fixed;
    bottom: -20px;
    right: 0;
    padding: 1rem;
    background-color: #c0c0c0;
    color: #000;
    text-align: center;
    display: block;
    border: 2px solid #000;
    box-shadow: 2px 2px 0 #fff, 4px 4px 0 #000;
    font-family: 'MS Sans Serif', Geneva, sans-serif;
    font-size: 14px;
    transition: 0.2s;

    &.show {
      bottom: 40px;
    }

    &.success {
      background-color: #00ff00;
    }

    &.error {
      background-color: #ff0000;
    }
  }
</style>
