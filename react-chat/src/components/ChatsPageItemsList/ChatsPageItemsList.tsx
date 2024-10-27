import type {FC} from 'react';
import {getChatsFromLocalStorage} from '../../api/chatsPage/getChatsFromLocalStorage';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import styles from './ChatsPageItemsList.module.scss';

interface IChatsPageItemsList {
    setId(id: string | null): void;
}

export const ChatsPageItemsList: FC<IChatsPageItemsList> = ({setId}) => {
    const chatsFromLocalStorage = getChatsFromLocalStorage();

    return (
        <ul className={styles.chatsPageItemsList}>
            {chatsFromLocalStorage.map((chat, index) => <ChatsPageItem key={`${index}_${chat.name}`} chat={chat} onClick={() => setId(chat.id)} />)}
        </ul>
    );
};
