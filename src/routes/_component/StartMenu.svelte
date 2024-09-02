<!-- src/routes/_component/StartMenu.svelte -->
<script lang="ts">
    export let visible: boolean;
</script>

<div class:visible={visible} class="start-menu">
    <ul>
        <li>Programs</li>
        <li>Documents</li>
        <li>Settings</li>
        <li>Find</li>
        <li>Help</li>
        <li>Run...</li>
        <li>Shut Down...</li>
    </ul>
</div>

<style lang="scss">
  .start-menu {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 200px;
    background-color: #c0c0c0;
    border: 2px solid #808080;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    display: none;

    &.visible {
      display: block;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
          background-color: #000080;
          color: #fff;
        }
      }
    }
  }
</style>
