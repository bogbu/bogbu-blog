import type {DraggableType} from "$lib/types/Draggable";

let item: string ;
const reset = () => {
    item = "";
}
export const dragStart = ({currentTarget, dataTransfer}:DraggableType) => {
    item = currentTarget.innerHTML;
}
export const drop = ({currentTarget, dataTransfer}:DraggableType) => {
    currentTarget.style.backgroundColor = "yellow";
    currentTarget.innerHTML = item;
}