import type {Chat} from '../../types/chats/index';

export const getChatsFromLocalStorage = (): Chat[] => JSON.parse(localStorage.getItem('chats') ?? '[]');