import type {FC} from 'react';
import {useEffect, useState} from 'react';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';
import {Chat} from '../types/types';
import avatar from '../images/avatar_1.jpg';
import {saveChatsToLocalStorage} from '../api/chatsPage/saveChatsToLocalStorage';
import {getChatsFromLocalStorage} from '../api/chatsPage/getChatsFromLocalStorage';
import {chatsMocks} from '../mocks/mocks';

export const ChatsPage: FC = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const handleSetChats = (chats: Chat[]) => setChats(chats);
    const addChat = (): void => {
        const id = `${chats.length + 1}`;
        const chat: Chat = {id, name: `Чувак ${id}`, avatar, messages: [{id: '1', date: new Date(), text: 'hey'}], isReadability: false};
        const newChats = [...chats, chat];
        saveChatsToLocalStorage(newChats);
        handleSetChats(newChats);
    }

    useEffect(() => {
        if (getChatsFromLocalStorage().length === 0) {
            saveChatsToLocalStorage(chatsMocks);
        }
        setChats(getChatsFromLocalStorage());
    }, []);

    return (
        <div>
            <ChatsPageHeader />
            <ChatsPageItemsList />
            <NewChatButton onClick={addChat} />
        </div>
    );
}