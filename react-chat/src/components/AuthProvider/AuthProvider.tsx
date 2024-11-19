import {createContext, type FC, useState, type PropsWithChildren} from 'react';
import {LocalStorageService} from '../../services/localStorageService';
import {type ContextType} from '../../types/context';

export const Context = createContext<ContextType>
({
    isUserAuth: false,
    setUserAuth: () => {},
});

const localStorageService = new LocalStorageService();

export const AuthProvider: FC<PropsWithChildren> = (props) => {
    const [isAuth, setAuth] = useState(localStorageService.getAccessToken() !== '');
    const contextValue = {isUserAuth: isAuth, setUserAuth: (value: boolean) => setAuth(value)};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};