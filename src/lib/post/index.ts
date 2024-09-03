import {supabase} from "../supabase";

export const getPost = async (id?: string) => {
    const idQuery = id ? id : "*";
    const { data, error } = await supabase
        .from('blog')
        .select(idQuery);
    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    return data;

}

export const fetchFiles = async (bucket: string) => {
    const { data, error } = await supabase.storage.from(bucket).list();
    if (error) {
        throw error;
    }
    console.log(data,"data");
    return data.map(file => ({
        ...file,
        url: `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${file.name}`
    }));
}
