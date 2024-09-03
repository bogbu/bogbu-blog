// src/store/showContentStore.ts
import {writable} from 'svelte/store';

export const showContent = writable<boolean>(true);
export const showProfile = writable(true);
export const showWeather = writable(true);
export const showMusic = writable(true);
export const toggleShowProfile = () => showProfile.update((value) => {
    value = !value;
    return value;
});
export const toggleShowContent = () => showContent.update((value) => {
    value = !value;
    return value;
});
export const toggleShowWeather = () => showWeather.update((value) => {
    value = !value;
    return value;
});
export const toggleShowMusic = () => showMusic.update((value) => {
    value = !value;
    return value;
});
