import {type Chat} from '../../types/types';

export const getChatsFromLocalStorage = (): Chat[] => JSON.parse(localStorage.getItem('chats') ?? '[]');