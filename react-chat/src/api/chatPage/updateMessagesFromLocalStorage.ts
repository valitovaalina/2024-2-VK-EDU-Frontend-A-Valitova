import type {Message} from '../../types/messages/index';
import type {Chat} from '../../types/chats/index';
import {getChatsFromLocalStorage} from '../chatsPage/getChatsFromLocalStorage';

export const updateMessagesFromLocalStorage = (message: Message, chatId: string): Chat[] => {
    const chats = getChatsFromLocalStorage();
    const filterChat = chats.filter((e: Chat) => e.id === chatId);
    const chat = filterChat ? filterChat[0] : null;

    chat?.messages.push(message);

    return chats;
};