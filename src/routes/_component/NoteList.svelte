<script lang="ts">
    import NoteLayout from "./NoteLayout.svelte";
    import type {Note, NoteWithId} from "$lib/types/Components";
    import {showEditNote} from "$lib/store/showContentStore";

    export let list: NoteWithId[] = [];
    export let addNewNote: (note: Note)  => void;
    export let deleteNote: (id: string) => void;
    let newNote: Note = {
        title: "",
        content: "",
        color: "",
        x: 0,
        y: 0,
        email: ''
    };
    export let editNote: (note: Note) => void;
</script>

<article class="note-list w-full h-[100vh] absolute z-0 top-0 left-0 {$showEditNote ? 'edit' : ''}">
    {#each list as note}
        <NoteLayout {note} {editNote} {deleteNote}/>
    {/each}

    {#if $showEditNote}
        <div class="edit-note">
            <input type="text" bind:value={newNote.title} placeholder="title"/>
            <textarea bind:value={newNote.content} maxlength="140"></textarea>
            <input type="color" bind:value={newNote.color}>
            <button on:click={()=>{addNewNote(newNote)}}>Save</button>
        </div>
    {/if}
</article>


<style lang="scss">
  .note-list {
    &.edit {
      background: rgba(0, 0, 0, 0.5);
    }

    .edit-note {
      overflow: hidden;
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      //height: 200px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;

      input {
        width: 100%;
        padding: 5px;
        border: 1px solid #000;
        outline: none;
      }

      textarea {
        width: 100%;
        height: 100px;
        padding: 5px;
        resize: none;
        outline: none;
      }

      button {
        width: 100%;
        height: 20px;
        border: 1px solid #000;
      }
    }
  }
</style>
