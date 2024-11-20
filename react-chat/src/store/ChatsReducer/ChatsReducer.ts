import {createSlice} from '@reduxjs/toolkit';
import {Reducer} from '../../consts/Reducer';
import type {ChatApiType} from '../../types/chats';
import {createNewChat, getChat, getChats} from '../apiActions';

const initialState: {
    chat: ChatApiType | null,
    chats:  ChatApiType[],
} = {
    chat: null,
    chats: [],
};

export const chatsReducer = createSlice({
    name: Reducer.CHATS_REDUCER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChat.fulfilled, (state, action) => {
                state.chat = action.payload;
            })
            .addCase(getChats.fulfilled, (state, action) => {
                state.chats = action.payload;
            })
            .addCase(createNewChat.fulfilled, (state, action) => {
                state.chats = [action.payload, ...state.chats];
            })
    },
});
