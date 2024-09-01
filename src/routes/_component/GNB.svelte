<script lang="ts">
    import WindowFrame from "./WindowFrame.svelte";

    interface Menu {
        name: string;
        url: string;
    }
    const menuList : Menu[] = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ];
</script>

<WindowFrame>
    <ul>
        {#each menuList as menu}
            <li>
                <a href={menu.url}>{menu.name}</a>
            </li>
        {/each}
    </ul>
</WindowFrame>

<style lang="scss">
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
            list-style: none;
          transition: 0.2s;
          border-radius: 3px;
          a {
            display: block;
            padding: 5px;
          }
          &:hover {
            background: #f0f0f0;
          }
        }
    }
</style>
