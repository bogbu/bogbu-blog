import {supabase} from "../supabase";
import type {User} from "@supabase/supabase-js";
import UserStore from "../../store/user";
export const google = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    });
}
export const getUser = async () => {
    const {data, error} = await supabase.auth.getUser();
    if(data.user) UserStore.set(data.user);
}