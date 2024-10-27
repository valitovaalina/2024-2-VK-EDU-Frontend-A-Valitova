import type {FC} from 'react';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';
import {Chat} from '../types/types';
import avatar from '../images/avatar_1.jpg';
import {saveChatsToLocalStorage} from '../api/chatsPage/saveChatsToLocalStorage';

interface IChatsPage {
    chats: Chat[];
    setChats(chats: Chat[]): void;
    setId(is: string | null): void;
}

export const ChatsPage: FC<IChatsPage> = ({chats, setChats, setId}) => {
    const addChat = (): void => {
        const id = `${chats.length + 1}`;
        const chat: Chat = {id, name: `Чувак ${id}`, avatar, messages: [{date: new Date(), text: 'hey'}], isReadability: false};
        const newChats = [...chats, chat];
        saveChatsToLocalStorage(newChats);
        setChats(newChats);
    }

    return (
        <div>
            <ChatsPageHeader />
            <ChatsPageItemsList setId={setId} />
            <NewChatButton onClick={addChat} />
        </div>
    );
}