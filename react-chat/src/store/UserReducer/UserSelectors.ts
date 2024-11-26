import {Reducer} from '../../consts/Reducer';
import type {State} from '../../types/store/index';

export const getUser = (state: State) => state[Reducer.USER_REDUCER].user;
export const getUsers = (state: State) => state[Reducer.USER_REDUCER].users;