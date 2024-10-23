export type Message = {
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