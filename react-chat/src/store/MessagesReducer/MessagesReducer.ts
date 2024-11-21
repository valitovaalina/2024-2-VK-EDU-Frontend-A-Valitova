import {createSlice} from '@reduxjs/toolkit';
import {Reducer} from '../../consts/Reducer';
import type {MessageApiType} from '../../types/messages';
import {createNewMessage, fetchMessages} from '../apiActions';

const initialState: {
    messages: MessageApiType[],
} = {
    messages: [],
};

export const messagesReducer = createSlice({
    name: Reducer.MESSAGES_REDUCER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
            })
            .addCase(createNewMessage.fulfilled, (state, action) => {
                state.messages = [...state.messages, action.payload];
            })
    },
});
