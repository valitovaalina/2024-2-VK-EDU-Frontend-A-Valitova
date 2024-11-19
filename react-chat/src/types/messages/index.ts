export type MessageApiType = {
    id: string;
    text: string;
    voice: string;
    chat: string;
    files: {item: string}[];
    updated_at: Date;
    created_at: Date;
}

export type MessagesListApiType = {
    count: number;
    next: string;
    previous: string;
    results: MessageApiType[];
}