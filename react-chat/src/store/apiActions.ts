import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import type {LoginType} from '../types/auth/index';
import type {ChatApiType} from '../types/chats/index';
import type {MessageApiType, MessagesListApiType} from '../types/messages/index';
import type {State} from '../types/store/index';
import type {RegisterUserApiType, UserApiType, AuthUserApiType, UpdateUserApiType} from '../types/user/index';

export const login = createAsyncThunk<LoginType, AuthUserApiType, {
    state: State;
    extra: AxiosInstance;
}>(
    'auth/login',
    async (_arg, {extra: api}) => {
        const {data} = await api.post<LoginType>('/auth/', _arg);

        return data;
    }
);

export const register = createAsyncThunk<UserApiType, RegisterUserApiType, {
    state: State;
    extra: AxiosInstance;
}>(
    'auth/register',
    async (_arg, {extra: api}) => {
        const {data} = await api.post<UserApiType>('/register/', _arg, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    }
);

export const fetchChat = createAsyncThunk<ChatApiType, {id: string}, {
    state: State;
    extra: AxiosInstance;
}>(
    'chats/getChat',
    async ({id}, {extra: api}) => {
        const {data} = await api.get<ChatApiType>(`/chat/${id}/`);

        return data;
    }
);

export const fetchChats = createAsyncThunk<ChatApiType[], undefined, {
    state: State;
    extra: AxiosInstance;
}>(
    'chats/getChats',
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/chats/');

        return data.results;
    }
);

export const createNewChat = createAsyncThunk<ChatApiType, {memberId: string}, {
    state: State;
    extra: AxiosInstance;
}>(
    'chats/createNewChat',
    async ({memberId}, {extra: api}) => {
        const {data} = await api.post('/chats/', {
            'members': [memberId],
            'is_private': true,
            'title': 'title'
        });
        
        return data;
    }
);

export const fetchMessages = createAsyncThunk<MessageApiType[], {id: string}, {
    state: State;
    extra: AxiosInstance;
}>(
    'messages/getMessages',
    async ({id}, {extra: api}) => {
        const {data} = await api.get<MessagesListApiType>(`/messages/?chat=${id}/`);

        return data.results;
    }
);

export const createNewMessage = createAsyncThunk<MessageApiType, {messageText: string, chatId: string}, {
    state: State;
    extra: AxiosInstance;
}>(
    'messages/createNewMessage',
    async ({messageText, chatId}, {extra: api}) => {
        const {data} = await api.post<MessageApiType>('/messages/', {
            text: messageText,
            chat: chatId,
        });

        return data;
    }
);

export const fetchUser = createAsyncThunk<UserApiType, undefined, {
    state: State;
    extra: AxiosInstance;
}>(
    'user/getUser',
    async (_arg, {extra: api}) => {
        const {data} = await api.get<UserApiType>('/user/current/');

        return data;
    }
);

export const fetchUsers = createAsyncThunk<UserApiType[], undefined, {
    state: State;
    extra: AxiosInstance;
}>(
    'user/getUsers',
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/users/');

        return data.results;
    }
);

export const updateUser = createAsyncThunk<UserApiType, {id: string, userData: UpdateUserApiType}, {
    state: State;
    extra: AxiosInstance;
}>(
    'user/updateUser',
    async ({id, userData}, {extra: api}) => {
        const {data} = await api.patch<UserApiType>(`/user/${id}/`, userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return data;
    }
);