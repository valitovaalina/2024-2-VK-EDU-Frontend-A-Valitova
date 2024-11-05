import {Message} from '../messages';

export type Chat = {
    id: string;
    name: string;
    avatar: string;
    messages: Message[];
    isReadability?: boolean;
}