import {useState} from 'react';
import {ChatPage} from './pages/ChatPage';
import {chatsMocks} from './mocks/mocks';
import {getChatsFromLocalStorage} from './utils/getChatsFromLocalStorage';
import {ChatsPage} from './pages/ChatsPage';

export function App() {
    const chats = getChatsFromLocalStorage();
    if (!chats) localStorage.setItem('chats', JSON.stringify(chatsMocks));

    const [id, setId] = useState<string | null>(null);

    return id === null ? <ChatsPage setId={setId} /> : <ChatPage chat={chatsMocks.filter(el => el.id === id)[0]} setId={setId} />;
}
