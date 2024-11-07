import {useContext} from 'react';
import {Context} from '../components/ContextProvider/ContextProvider';

export const useAuth = () => useContext(Context);
