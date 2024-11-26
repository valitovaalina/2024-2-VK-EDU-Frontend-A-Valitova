import {Reducer} from '../../consts/Reducer';
import type {State} from '../../types/store/index';

export const getMessages = (state: State) => state[Reducer.MESSAGES_REDUCER].messages;