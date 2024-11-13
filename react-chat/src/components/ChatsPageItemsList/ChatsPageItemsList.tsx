import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {ChatApiType} from '../../types/chats';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import styles from './ChatsPageItemsList.module.scss';

interface IChatsPageItemsList {
    chats: ChatApiType[];
}

export const ChatsPageItemsList: FC<IChatsPageItemsList> = ({chats}) => {
    const navigate = useNavigate();

    return (
        <ul className={styles.list}>
            {chats.map((chat) => <ChatsPageItem key={chat.id} chat={chat} onClick={() => navigate(`/chat/${chat.id}`)} />)}
        </ul>
    );
};
