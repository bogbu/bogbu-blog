import {supabase} from "../supabase";
import type {Posts} from "$lib/types/Posts";

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
