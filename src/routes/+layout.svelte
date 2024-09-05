<script lang="ts">
    import Header from './_component/Header.svelte';
    import './styles.css';
    import '../lib/font/font.css';
    import {onMount} from "svelte";
    import {getUser} from "$lib/auth";
    import TaskBar from "./_component/TaskBar.svelte";
    import {showContent} from "$lib/store/showContentStore";
    import {colorStore} from "$lib/store/colorStore";
    import NoteList from "./_component/NoteList.svelte";
    import type {Note, NoteWithId} from "$lib/types/Components";
    import {deleteNote, fetchNote, postNote, putNote} from "$lib/post";

    let noteList: NoteWithId[];
    let loading = false;
    const addNewNote = async (note: Note) => {
        let newNote: Note = {...note};
        try {
            const data = await postNote(newNote);
            const note = await fetchNote();
            if (note) noteList = note;
        } catch (error) {
            console.error("Error adding new note:", error);
        }
    }
    const editNote = async (note: Note) => {
        if(loading) return;
        loading = true;
        console.log(note,"note");
        const newNote: Note = {...note};
        try {
            const data = await putNote(newNote);
            console.log(data,"data");
            const note = await fetchNote();
            loading = false;
            if (note) noteList = note;
        } catch (error) {
            console.error("Error editing note:", error);
        }
    }
    const deleteItem = async (id : string) => {
        if(loading) return;
        loading = true;
        try {
            const data = await deleteNote(id);
            const note = await fetchNote();
            loading = false;
            if (note) noteList = note;
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    }
    onMount(async () => {
        await getUser();
        const note = await fetchNote();
        if (note) noteList = note;
    });
</script>

<div class="app flex-col md:flex-row flex gap-3 relative p-3 md:p-10">
    <Header/>
    <main style="scrollbar-color: {$colorStore} {$colorStore}; relative z-2 scrollbar-arrow-color: {$colorStore};">
        {#if $showContent}
            <slot/>
        {/if}
    </main>
    <TaskBar/>
    <NoteList list={noteList} {editNote} {addNewNote} deleteNote={deleteItem}/>
</div>

<style lang="scss">
  @import '../lib/color/color.scss';

  .app {
    background: #817978;
    height: 100vh;
    overflow: hidden;

    main {
      flex: 1;
      padding-bottom: 40px;
    }
  }

  /* Custom scrollbar styles for Firefox */
  * {
    scrollbar-width: thin;
    //scrollbar-color: $secondary-color $secondary-color;
    //scrollbar-arrow-color: $secondary-color;
    transition: 0.2s;
  }

  *:hover {
    //scrollbar-color: #fff $secondary-color;
  }
</style>
