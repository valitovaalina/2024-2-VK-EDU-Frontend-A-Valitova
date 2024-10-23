import {Message, type Chat} from '../types/types';
import {getChatsFromLocalStorage} from './getChatsFromLocalStorage';

export const loadMessagesFromLocalStorage = (chatId: string): Message[] => getChatsFromLocalStorage().filter((e: Chat) => e.id === chatId)[0].messages;