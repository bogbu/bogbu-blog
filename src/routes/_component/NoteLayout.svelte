<script lang="ts">
    import type { Note } from "$lib/types/Components";
    import { createEventDispatcher } from "svelte";

    export let note: Note;
    export let editNote: (note: Note) => void;
    const dispatch = createEventDispatcher();

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

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
        dispatch("update", { note });
        editNote(note);
    }
</script>

<div
        class="note-layout"
        style="background: {note.color}; left: {note.x}px; top: {note.y}px;"
        on:mousedown={handleMouseDown}
>
    <div>{note.title}</div>
    <div class="note-content">
        {note.content}
    </div>
</div>

<style lang="scss">
  .note-layout {
    position: absolute;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
    max-width: 300px;
    margin: 10px;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    header {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .note-content {
      font-size: 1em;
    }
  }
</style>
