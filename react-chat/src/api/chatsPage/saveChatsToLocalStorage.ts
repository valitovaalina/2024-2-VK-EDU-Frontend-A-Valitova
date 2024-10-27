import {Chat} from '../../types/types';

export const saveChatsToLocalStorage = (chats: Chat[]) => localStorage.setItem('chats', JSON.stringify(chats));