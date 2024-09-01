import {supabase} from "../supabase";
import type {User} from "@supabase/supabase-js";
import UserStore, {resetUser} from "../../store/user";
export const google = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo : import.meta.env.VITE_PUBLIC_GOOGLE_REDIRECT_URL
        },
    });
}
export const getUser = async () => {
    const {data, error} = await supabase.auth.getUser();
    if(data.user) UserStore.set(data.user);
}
export const logout = async () => {
    await supabase.auth.signOut();
    UserStore.set(resetUser);
}