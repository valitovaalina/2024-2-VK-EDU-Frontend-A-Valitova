import {createSlice} from '@reduxjs/toolkit';
import {Reducer} from '../../consts/Reducer';
import type {UserApiType} from '../../types/user/index';
import {fetchUser, fetchUsers, updateUser} from '../apiActions';

const initialState: {
    user: UserApiType | null,
    users:  UserApiType[],
} = {
    user: null,
    users: [],
};

export const userReducer = createSlice({
    name: Reducer.USER_REDUCER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    },
});
