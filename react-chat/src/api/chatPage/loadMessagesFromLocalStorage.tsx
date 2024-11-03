import type {Chat} from '../../types/chats/index';
import type {Message} from '../../types/messages/index';
import {getChatsFromLocalStorage} from '../chatsPage/getChatsFromLocalStorage';

export const loadMessagesFromLocalStorage = (chatId: string): Message[] | null => {
    const filterChat = getChatsFromLocalStorage().filter((e: Chat) => e.id === chatId);
    
    return filterChat ? filterChat[0].messages : null;
}