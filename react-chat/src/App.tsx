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
    const handleSetId = (id: string | null) => setId(id);
    const handleSetChats = (chats: Chat[]) => setChats(chats);
    const chat = filterChat ? filterChat[0] : null;
    
    
    useEffect(() => {
        if (getChatsFromLocalStorage().length === 0) {
            saveChatsToLocalStorage(chatsMocks);
        }
        setChats(getChatsFromLocalStorage());
    }, []);

    return id === null ? <ChatsPage handleSetId={handleSetId} chats={chats} handleSetChats={handleSetChats}/> : <ChatPage chat={chat} handleSetId={handleSetId} />;
}
