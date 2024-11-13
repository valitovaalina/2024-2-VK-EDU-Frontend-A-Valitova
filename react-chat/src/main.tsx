import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {AuthProvider} from './components/AuthProvider/AuthProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </StrictMode>,
)
