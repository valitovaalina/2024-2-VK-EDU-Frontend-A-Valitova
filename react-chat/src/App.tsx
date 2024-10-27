import {useState} from 'react';
import {ChatPage} from './pages/ChatPage';
import {chatsMocks} from './mocks/mocks';
import {getChatsFromLocalStorage} from './api/chatsPage/getChatsFromLocalStorage';
import {ChatsPage} from './pages/ChatsPage';
import {saveChatsToLocalStorage} from './api/chatsPage/saveChatsToLocalStorage';

export function App() {
    const [id, setId] = useState<string | null>(null);
    const chats = getChatsFromLocalStorage();
    
    if (chats.length === 0) saveChatsToLocalStorage(chatsMocks);

    return id === null ? <ChatsPage setId={setId} /> : <ChatPage chat={chatsMocks.filter(el => el.id === id)[0]} setId={setId} />;
}
