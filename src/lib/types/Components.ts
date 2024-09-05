export interface ContentsType {
    width: number;
    height: number;
    contents: string
}

export interface Note {
    email: string;
    title: string;
    content: string;
    color: string;
    x: number;
    y: number;
}
export interface NoteWithId extends Note {
    id: string;
}
