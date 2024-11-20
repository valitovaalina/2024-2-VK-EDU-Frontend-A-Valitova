import {combineReducers} from '@reduxjs/toolkit';
// import {authReducer} from './AuthReducer/AuthReducer';
import {chatsReducer} from './ChatsReducer/ChatsReducer';
import {userReducer} from './UserReducer/UserReducer';
// import {messagesReducer} from './MessagesReducer/MessagesReducer';
import {Reducer} from '../consts/Reducer';

const reducer = combineReducers({
    // [Reducer.AUTH_REDUCER]: authReducer.reducer,
    [Reducer.CHATS_REDUCER]: chatsReducer.reducer,
    [Reducer.USER_REDUCER]: userReducer.reducer,
    // [Reducer.MESSAGES_REDUCER]: messagesReducer.reducer,
});

export {reducer};
