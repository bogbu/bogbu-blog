<!-- src/routes/_component/StartMenu.svelte -->
<script lang="ts">
    export let visible: boolean;
    interface StartMenuList {
        name : string,
        url : string
    }
    const startMenuList : StartMenuList[] = [
        {name: "Profiles", url: "/profiles"},
        {name: "Guestbook", url: "/guestBook"},
        {name: "Portfolio", url: "/portfolio"},
    ]
</script>

<div class:visible={visible} class="start-menu">
    <ul>
        {#each startMenuList as item}
            <li>
                <a href={item.url}>
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
  .start-menu {
    position: absolute;
    bottom: 38px;
    left: -2px;
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
