import {type Message} from '../../types/types';
import {updateMessagesFromLocalStorage} from './updateMessagesFromLocalStorage';

export const saveMessageToLocalStorage = (message: Message, chatId: string): void => localStorage.setItem('chats', JSON.stringify(updateMessagesFromLocalStorage(message, chatId)));