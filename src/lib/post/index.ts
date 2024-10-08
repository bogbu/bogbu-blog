import {supabase} from "../supabase";
import type {Posts, Profile} from "$lib/types/Posts";
import type {Note, NoteWithId} from "$lib/types/Components";
import UserStore from "$lib/store/user";
import {get} from "svelte/store";
import {errorAlert, successAlert} from "$lib/store/alert";

export const getPost = async (id?: string): Promise<Posts[]> => {
    let query = supabase.from('blog').select('*').order('created_at', {ascending: false});

    if (id) {
        query = query.eq('id', id);
    }

    const {data, error} = await query.returns<Posts[]>();

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data;
};

export const fetchFiles = async (bucket: string) => {
    const {data, error} = await supabase.storage.from(bucket).list();
    if (error) {
        throw error;
    }
    console.log(data, "data");
    return data.map(file => ({
        ...file,
        url: `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${file.name}`
    }));
}

export const fetchNote = async (id?: string): Promise<NoteWithId[]> => {
    let query = supabase.from('note').select('*').order('created_at', {ascending: false});

    if (id) {
        query = query.eq('id', id);
    }

    const {data, error} = await query.returns<NoteWithId[]>();

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data;
}

export const postNote = async (note: Note) => {
    let newNote = {...note};
    const email = get(UserStore).email;
    if (email) {
        newNote.email = email;
        const {data, error} = await supabase.from('note').insert([newNote]);
        if (error) {
            errorAlert('Error posting note');
            throw error;
        }
        successAlert('Note posted');
        return data;
    }
}

export const putNote = async (note: Note) => {
    const {data, error} = await supabase.from('note').upsert([note]);
    if (error) {
        errorAlert('Error updating note');
        throw error;
    }
    successAlert('Note updated');
    return data;
}
export const deleteNote = async (id: string) => {
    const {data, error} = await supabase.from('note').delete().eq('id', id);
    if (error) {
        errorAlert('Error deleting note');
        throw error;
    }
    successAlert('Note deleted');
    return data;
}

export const fetchProfile = async (id?: string): Promise<Profile[]> => {
    let query = supabase.from('profiles').select('*').order('created_at', {ascending: false});

    if (id) {
        query = query.eq('id', id);
    }

    const {data, error} = await query.returns<Profile[]>();

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data;
}
