import {writable} from "svelte/store";
import type {Alert} from "$lib/types/Posts";

export const resetAlert :Alert = {
    message: "",
    type: "",
    isShow: false
}

const AlertStore = writable(resetAlert);
export const errorAlert = (message : string) => {
    AlertStore.set({message: `${message} Error`, type: "error", isShow: true});
    setTimeout(() => {
        AlertStore.update(alert => ({ ...alert, isShow: false }));
    }, 3000);
}
export const successAlert = (message : string) => {
    AlertStore.set({message: `${message} Success`, type: "success", isShow: true});
    setTimeout(() => {
        AlertStore.update(alert => ({ ...alert, isShow: false }));
    }, 3000);
}
export default AlertStore;
