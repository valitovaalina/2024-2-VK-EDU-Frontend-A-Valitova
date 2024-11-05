import type {Chat} from '../../types/chats/index';

export const saveChatsToLocalStorage = (chats: Chat[]) => localStorage.setItem('chats', JSON.stringify(chats));