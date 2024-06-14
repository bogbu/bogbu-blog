<script>
import {dragStart} from "$lib/utils/draggable/dnd";
</script>

<article draggable="true" on:dragstart={(e)=>{dragStart({currentTarget: e.currentTarget, dataTransfer : e.dataTransfer})}} >
    <slot></slot>
</article>