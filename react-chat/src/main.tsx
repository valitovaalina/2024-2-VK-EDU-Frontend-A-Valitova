import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ContextProvider} from './components/ContextProvider/ContextProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ContextProvider />
    </StrictMode>,
)
