import type {Dispatch, FC, SetStateAction} from 'react';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';

interface IChatsPage {
    setId: Dispatch<SetStateAction<string | null>>;
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