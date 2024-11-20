import {Reducer} from '../../consts/Reducer';
import type {State} from '../../types/store/index';

export const getChat = (state: State) => state[Reducer.CHATS_REDUCER].chat;
export const getUserChats = (state: State) => state[Reducer.CHATS_REDUCER].chats;