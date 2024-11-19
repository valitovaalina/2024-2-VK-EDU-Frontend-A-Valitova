import {useContext} from 'react';
import {Context} from '../components/AuthProvider/AuthProvider';

export const useAuth = () => useContext(Context);
