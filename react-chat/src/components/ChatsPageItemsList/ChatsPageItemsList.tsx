import type {FC} from 'react';
import {getChatsFromLocalStorage} from '../../api/chatsPage/getChatsFromLocalStorage';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import styles from './ChatsPageItemsList.module.scss';

interface IChatsPageItemsList {
    handleSetId(id: string | null): void;
}

export const ChatsPageItemsList: FC<IChatsPageItemsList> = ({handleSetId}) => {
    const chatsFromLocalStorage = getChatsFromLocalStorage();

    return (
        <ul className={styles.chatsPageItemsList}>
            {chatsFromLocalStorage.map((chat) => <ChatsPageItem key={chat.id} chat={chat} onClick={() => handleSetId(chat.id)} />)}
        </ul>
    );
};
