import type {Dispatch, FC, SetStateAction} from 'react';
import {getChatsFromLocalStorage} from '../../utils/getChatsFromLocalStorage';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import './ChatsPageItemsList.scss';

interface IChatsPageItemsList {
    setId: Dispatch<SetStateAction<string | null>>;
}

export const ChatsPageItemsList: FC<IChatsPageItemsList> = ({setId}) => {
    const chatsFromLocalStorage = getChatsFromLocalStorage();

    return (
        <ul className="chats-page-items-list">
            {chatsFromLocalStorage.map((chat, index) => <ChatsPageItem key={index} chat={chat} onClick={() => setId(chat.id)} />)}
        </ul>
    );
};
