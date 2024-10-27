import {Message, type Chat} from '../../types/types';
import {getChatsFromLocalStorage} from '../chatsPage/getChatsFromLocalStorage';

export const loadMessagesFromLocalStorage = (chatId: string): Message[] | null => {
    const filterChat = getChatsFromLocalStorage().filter((e: Chat) => e.id === chatId);
    
    return filterChat ? filterChat[0].messages : null;
}