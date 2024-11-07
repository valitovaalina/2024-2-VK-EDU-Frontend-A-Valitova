import {createContext, type FC, useState} from 'react';
import {App} from '../../App';
import {LocalStorageService} from '../../services/localStorageService';
import {type ContextType} from '../../types/context';

export const Context = createContext<ContextType>
({
    isUserAuth: false,
    setUserAuth: () => {},
});

const localStorageService = new LocalStorageService();

export const ContextProvider: FC = () => {
    const [isAuth, setAuth] = useState(localStorageService.getAccessToken() !== '');
    const contextValue = {isUserAuth: isAuth, setUserAuth: (value: boolean) => setAuth(value)};

    return (
        <Context.Provider value={contextValue}>
            <App />
        </Context.Provider>
    );
};