import {createChatPage} from './pages/chat-page';
import {createChatsPage} from './pages/chats-page';
import {chatsMocks} from './mocks/mocks';
import {getChatsFromLocalStorage} from '../src/pages/chat-page';
import './styles/index.scss';

const root = document.getElementById('root');
const app = document.createElement('div');
let state = 'chats-page';
let chatId = 1;
let chatName = '';

const chats = getChatsFromLocalStorage();
if (!chats) localStorage.setItem('chats', JSON.stringify(chatsMocks));

const updateApp = () => {
    app.innerHTML = '';

    switch (state) {
        case 'chats-page':
            app.appendChild(createChatsPage(chatId))
            break;
        case 'chat-page':
            app.appendChild(createChatPage(chatName, chatId))
            break;
    }

    root.appendChild(app);
}

window.updateState = (updatedState, params = {}) => {
    state = updatedState;

    if (updatedState === 'chat-page') {
        chatId = params.chatId;
        chatName = params.chatName;
    }

    updateApp();
}

updateApp();