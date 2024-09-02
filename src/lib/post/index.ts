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
