import {createAction} from '@reduxjs/toolkit';

export const Action = {
    SET_USER_ID_TO_LOCAL_STORAGE: 'user/setUserIdToLocalStorage',
};

export const setUserIdToLocalStorage = createAction<string>(Action.SET_USER_ID_TO_LOCAL_STORAGE);
