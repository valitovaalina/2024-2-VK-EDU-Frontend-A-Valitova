import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {getChatsFromLocalStorage} from '../../api/chatsPage/getChatsFromLocalStorage';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import styles from './ChatsPageItemsList.module.scss';

export const ChatsPageItemsList: FC = () => {
    const chatsFromLocalStorage = getChatsFromLocalStorage();
    const navigate = useNavigate();

    return (
        <ul className={styles.list}>
            {chatsFromLocalStorage.map((chat) => <ChatsPageItem key={chat.id} chat={chat} onClick={() => navigate(`/chat/${chat.id}`)} />)}
        </ul>
    );
};
