<script lang="ts">
    let content_option = "";
    let className = "";
    export let onHandleClosed = () => {
        // header_option = 'none';
    }
    const onHandleMaximize = () => {
        content_option = '';
    }
    const onHandleMinimization = () => {
        content_option = 'none';
    }
</script>

<section class={`window--frame ${className}`}>
    <div class="window--frame__header">
        <div class="window--frame__header__button">
            <button on:click={onHandleMinimization} class="minus-box"></button>
            <button on:click={onHandleMaximize} class="square-box"></button>
            <button on:click={onHandleClosed} class="cross-box"></button>
        </div>
        <div class={`window--frame__content max-h-[300px] md:max-h-[600px] ${content_option}`}>
            <slot/>
        </div>
    </div>
</section>

<style lang="scss">
  @import '../../lib/color/color.scss';
  .window--frame {
    border: 2px solid #000;
    border-radius: 10px;
    overflow: hidden;
    //margin: 10px;
    width: 100%;

    .window--frame__header {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: $secondary-color;
      padding: 5px;
      box-sizing: border-box;

      .window--frame__header__button {
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-end;
        gap: 5px;
      }
      .minus-box {
        position: relative;
        width: 20px;
        height: 20px;
        border: 1px solid #000;
        background: transparent;
        cursor: pointer;
        border-radius: 5px;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 25%;
          width: 50%;
          height: 1px;
          background-color: #000;
          transform: translateY(-50%);
        }
      }
      .square-box {
        position: relative;
        background: transparent;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 2px;
          border: 1px solid #000;
          //background-color: #000;
          transform: translate(-50%, -50%);
        }
      }
      .cross-box {
        position: relative;
        width: 20px;
        height: 20px;
        border: 1px solid #000;
        background: transparent;
        cursor: pointer;
        border-radius: 5px;

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70%;
          height: 0.8px;
          background-color: #000;
        }

        &::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }

    .window--frame__content {
      background: #fff;
      border: 2px solid #000;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 10px;
      transition: 0.2s;
      &.none {
        transition: 0.1s;
        max-height: 0;
        padding: 0;
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
