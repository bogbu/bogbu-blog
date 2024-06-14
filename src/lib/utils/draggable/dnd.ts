import type {DraggableType} from "$lib/types/Draggable";


export const dragStart = ({currentTarget, dataTransfer}:DraggableType) => {
    console.log(currentTarget, dataTransfer , 'dragStart event');
}
export const drop = ({currentTarget, dataTransfer}:DraggableType) => {
    console.log(currentTarget, dataTransfer , 'drop event');
}