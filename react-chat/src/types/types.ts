export type Message = {
    id: string;
    text: string;
    date: Date;
}

export type Chat = {
    id: string;
    name: string;
    avatar: string;
    messages: Message[];
    isReadability?: boolean;
}

export type User = {
    first_name: string;
    last_name: string;
    bio: string;
    avatar: string;
}