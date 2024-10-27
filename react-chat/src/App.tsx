import {useEffect, useState} from 'react';
import {ChatPage} from './pages/ChatPage';
import {chatsMocks} from './mocks/mocks';
import {getChatsFromLocalStorage} from './api/chatsPage/getChatsFromLocalStorage';
import {ChatsPage} from './pages/ChatsPage';
import {saveChatsToLocalStorage} from './api/chatsPage/saveChatsToLocalStorage';
import {type Chat} from './types/types';

export function App() {
    const [id, setId] = useState<string | null>(null);
    const [chats, setChats] = useState<Chat[]>([]);
    const filterChat = chats.filter((el) => el.id === id);
    
    useEffect(() => {
        if (getChatsFromLocalStorage().length === 0) {
            saveChatsToLocalStorage(chatsMocks);
        }
        setChats(getChatsFromLocalStorage());
    }, []);

    return id === null ? <ChatsPage setId={setId} chats={chats} setChats={(chats: Chat[]) => setChats(chats)}/> : <ChatPage chat={filterChat ? filterChat[0] : null} setId={setId} />;
}
