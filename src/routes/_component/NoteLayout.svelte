<script lang="ts">
    import type {Note, NoteWithId} from "$lib/types/Components";
    import {createEventDispatcher} from "svelte";
    import {showEditNote} from "$lib/store/showContentStore";
    import UserStore from "$lib/store/user";

    export let note: NoteWithId;
    export let editNote: (note: Note) => void;
    export let deleteNote: (id: string) => void;
    const dispatch = createEventDispatcher();

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let isEditing = false;

    function handleMouseDown(event: MouseEvent) {
        isDragging = true;
        offsetX = event.clientX - note.x;
        offsetY = event.clientY - note.y;
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseMove(event: MouseEvent) {
        if (isDragging) {
            note.x = event.clientX - offsetX;
            note.y = event.clientY - offsetY;
        }
    }

    function handleMouseUp() {
        isDragging = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        dispatch("update", {note});
        editNote(note);
    }

    const editText = () => {
        isEditing = true;
    }
</script>
<div class="note-layout--wrap" style=" left: {note.x}px; top: {note.y}px;">
    {#if $showEditNote}
        {#if note.email === $UserStore.email}
            <div class="absolute top-[-15px] right-0 flex gap-1 text-[20px]">
                <button on:click={editText}>
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32"
                         style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                         version="1.1"
                         xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.965,5.462c0,-0 -2.584,0.004 -4.979,0.008c-3.034,0.006 -5.49,2.467 -5.49,5.5l0,13.03c0,1.459 0.579,2.858 1.611,3.889c1.031,1.032 2.43,1.611 3.889,1.611l13.003,0c3.038,-0 5.5,-2.462 5.5,-5.5c0,-2.405 0,-5.004 0,-5.004c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.827,-0 -1.5,0.672 -1.5,1.5l0,5.004c0,1.381 -1.119,2.5 -2.5,2.5l-13.003,0c-0.663,-0 -1.299,-0.263 -1.768,-0.732c-0.469,-0.469 -0.732,-1.105 -0.732,-1.768l0,-13.03c0,-1.379 1.117,-2.497 2.496,-2.5c2.394,-0.004 4.979,-0.008 4.979,-0.008c0.828,-0.002 1.498,-0.675 1.497,-1.503c-0.001,-0.828 -0.675,-1.499 -1.503,-1.497Z"/>
                        <path d="M20.046,6.411l-6.845,6.846c-0.137,0.137 -0.232,0.311 -0.271,0.501l-1.081,5.152c-0.069,0.329 0.032,0.671 0.268,0.909c0.237,0.239 0.577,0.343 0.907,0.277l5.194,-1.038c0.193,-0.039 0.371,-0.134 0.511,-0.274l6.845,-6.845l-5.528,-5.528Zm1.415,-1.414l5.527,5.528l1.112,-1.111c1.526,-1.527 1.526,-4.001 -0,-5.527c-0.001,-0 -0.001,-0.001 -0.001,-0.001c-1.527,-1.526 -4.001,-1.526 -5.527,-0l-1.111,1.111Z"/>
                        <g id="Icon"/></svg>
                </button>
                <button on:click={() => deleteNote(note.id)}>X</button>
            </div>
        {/if}
    {/if}
    <button
            class="note-layout"
            style="background: {note.color}; {note.email === $UserStore.email ? 'cursor: grab;' : 'cursor :not-allowed; '}"
            on:mousedown={note.email === $UserStore.email && !isEditing ? handleMouseDown : undefined}
    >
        {#if isEditing}
            <div class="flex flex-col gap-1">
                <input class="w-full" type="text" bind:value={note.title}/>
                <textarea class="w-full" bind:value={note.content} maxlength="140"/>
                <button on:click={() => {editNote(note); isEditing = false;}}>Save</button>
            </div>
        {:else}
            <div>{note.title}</div>
            <div class="note-content">
                {note.content}
            </div>
        {/if}
    </button>
</div>

<style lang="scss">
  .note-layout--wrap {
    position: absolute;

    .note-layout {
      //position: absolute;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
      max-width: 200px;
      margin: 10px;

      &:active {
        cursor: grabbing;
      }

      .note-content {
        font-size: 1em;
      }
    }
  }

</style>
