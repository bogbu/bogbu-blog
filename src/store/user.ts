import { writable } from 'svelte/store';
import type {User} from "@supabase/supabase-js";

const UserStore = writable<User>({
    action_link: "",
    app_metadata: {},
    aud: "",
    confirmation_sent_at: "",
    confirmed_at: "",
    created_at: "",
    email: "",
    email_change_sent_at: "",
    email_confirmed_at: "",
    factors: [],
    id: "",
    identities: [],
    invited_at: "",
    is_anonymous: false,
    last_sign_in_at: "",
    new_email: "",
    new_phone: "",
    phone: "",
    phone_confirmed_at: "",
    recovery_sent_at: "",
    role: "",
    updated_at: "",
    user_metadata: {}

});

export default UserStore;