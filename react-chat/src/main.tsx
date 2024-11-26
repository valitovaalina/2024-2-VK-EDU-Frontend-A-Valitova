import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {App} from './App';
import {AuthProvider} from './components/AuthProvider/AuthProvider';
import './index.css';
import {store} from './store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </Provider>
    </StrictMode>,
)
