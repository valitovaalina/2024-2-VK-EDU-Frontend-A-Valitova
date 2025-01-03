import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/apiService';
import {reducer} from './reducer';

export const api = createAPI();

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
        }),
});
