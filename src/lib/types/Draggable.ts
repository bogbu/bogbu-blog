import type {EventHandler} from "svelte/elements";

export interface DraggableType {
    currentTarget: (EventTarget & HTMLElement)
    dataTransfer :DataTransfer | null
}

export interface DraggableListType {
    list : DraggableType[]
}