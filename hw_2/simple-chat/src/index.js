import {createChatPage} from './pages/chat-page';
import './styles/index.scss';

const root = document.getElementById('root');
const App = document.createElement('div');
App.id = 'App';

let state = 'chat-page';
let userId = 31;
let chatId = null;

const updateApp = () => {
    App.innerHTML = '';

    switch (state) {
        case "chat-page":
            App.appendChild(createChatPage({userId: userId}))
            break;
    }

    root.appendChild(App);
}

window.updateState = (newState, params = {}) => {
    state = newState;

    if (newState === 'chat') {
        chatId = params.chatId;
    }
    updateApp();
}

window.addEventListener('storage', (event) => {
    if (event.key === 'chats') {
        const updatedChats = JSON.parse(event.newValue);
    }
});

updateApp();