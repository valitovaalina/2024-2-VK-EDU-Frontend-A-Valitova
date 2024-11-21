import {createAction} from '@reduxjs/toolkit';

export const Action = {
    UPDATE_USER_FIRST_NAME: 'user/updateUserFirstName',
    UPDATE_USER_LAST_NAME: 'user/updateUserLastName',
    UPDATE_USER_BIO: 'user/updateUserBio',
};

export const updateUserFirstName = createAction<string>(Action.UPDATE_USER_FIRST_NAME);
export const updateUserLastName = createAction<string>(Action.UPDATE_USER_LAST_NAME);
export const updateUserBio = createAction<string>(Action.UPDATE_USER_BIO);
