import type {FC} from 'react';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';

interface IChatsPage {
    setId(is: string | null): void;
}

export const ChatsPage: FC<IChatsPage> = ({setId}) => {
    return (
        <div>
            <ChatsPageHeader />
            <ChatsPageItemsList setId={setId} />
            <NewChatButton />
        </div>
    );
}