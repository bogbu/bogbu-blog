export interface Posts {
    id: number;
    title: string;
    contents: string;
    author: string;
    created_at: string;
    updated_at: string;
    hashtags: string[];
}

export interface Profile {
    id: string;
    updated_at: string;
    username: string;
    avatar_url: string;
    created_at: string;
    explanation: string;
    full_name: string;
}

export interface Alert {
    message: string;
    type: string;
    isShow: boolean;
}
