import type {Chat, Message} from '../types/types';
import {getChatsFromLocalStorage} from './getChatsFromLocalStorage';

export const updateMessagesFromLocalStorage = (message: Message, chatId: string): Chat[] => {
    const chats = getChatsFromLocalStorage();
    const chat = chats.filter((e: Chat) => e.id === chatId)[0];

    chat.messages.push(message);

    return chats;
};