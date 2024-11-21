import {createSlice} from '@reduxjs/toolkit';
import {Reducer} from '../../consts/Reducer';
import type {UserApiType} from '../../types/user/index';
import {updateUserBio, updateUserFirstName, updateUserLastName} from '../actions';
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
            .addCase(updateUserFirstName, (state, action) => {
                if (state.user) {
                    state.user = {...state.user, first_name: action.payload};
                }
            })
            .addCase(updateUserLastName, (state, action) => {
                if (state.user) {
                    state.user = {...state.user, last_name: action.payload};
                }
            })
            .addCase(updateUserBio, (state, action) => {
                if (state.user) {
                    state.user = {...state.user, bio: action.payload};
                }
            })
    },
});
