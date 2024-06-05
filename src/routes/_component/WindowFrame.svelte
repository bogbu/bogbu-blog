<script lang="ts">
    let header_option = "";
    let content_option = "";
    const onHandleClosed = () => {
        header_option = 'none';
    }
    const onHandleMaximize = () => {
        content_option = '';
    }
    const onHandleMinimization = () => {
        content_option = 'none';
    }
</script>

<section class={`window--frame ${header_option}`}>
    <div class="window--frame__header">
        <button on:click={onHandleMinimization}>minimization</button>
        <button on:click={onHandleMaximize}>maximize</button>
        <button on:click={onHandleClosed}>close</button>
    </div>
    <div class={`window--frame__content ${content_option}`}>
        <slot/>
    </div>
</section>

<style lang="scss">
  .window--frame {
    border: 2px solid #000;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;

    .window--frame__header {
      display: flex;
      justify-content: flex-end;
    }

    .window--frame__content {
      &.none {
        transition: 0.2s;
        height: 0;
      }
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
</style>