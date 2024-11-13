import {type UserApiType} from '../user';

export type ChatApiType = {
    id: string,
    title: string;
    members: UserApiType[],
    creator: UserApiType,
    avatar: string;
    created_at: Date;
    updated_at: Date;
    is_private: boolean;
    last_message: {
        text: string;
    };
}

export type ChatsListApiType = {
    count: number;
    next: string;
    previous: string;
    results: ChatApiType[];
}