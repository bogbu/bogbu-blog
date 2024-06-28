<script lang="ts">
    let header_option = "";
    let content_option = "";
    let className = "";
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

<section class={`window--frame ${header_option} ${className}`}>
    <div class="window--frame__header">
        <div class="window--frame__header__button">
            <button on:click={onHandleMinimization}>-</button>
            <button on:click={onHandleMaximize}>□</button>
            <button on:click={onHandleClosed}>X</button>
        </div>
        <div class={`window--frame__content ${content_option}`}>
            <slot/>
        </div>
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
      flex-direction: column;
      justify-content: flex-end;
      background: greenyellow;
      padding: 5px;
      box-sizing: border-box;

      .window--frame__header__button {
        padding-bottom: 5px;
      }
    }

    .window--frame__content {
      max-height: 600px;
      background: #fff;
      border: 2px solid #000;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      overflow: hidden;
        padding: 10px;
      &.none {
        transition: 0.2s;
        max-height: 0;

        & + .window--frame__header {
          background: #000;
          border-bottom: none;
        }
      }
    }

    button {
      //border: none;
      background: transparent;
      cursor: pointer;
      border: 1px solid #000;
      width: 20px;
      height: 20px;
      border-radius: 5px;

    }

    &.none {
      display: none;
    }
  }
</style>