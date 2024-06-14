import type {DraggableType} from "$lib/types/Draggable";


export const dragStart = ({currentTarget, dataTransfer}:DraggableType) => {
    console.log(currentTarget, dataTransfer , 'event');
}