import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useStore';
import {getUserChats} from '../../store/ChatsReducer/ChatsSelectors';
import {ChatsPageItem} from '../ChatsPageItem/ChatsPageItem';
import styles from './ChatsPageItemsList.module.scss';

export const ChatsPageItemsList: FC = () => {
    const navigate = useNavigate();
    const chats = useAppSelector(getUserChats);

    return (
        <ul className={styles.list}>
            {chats.map((chat) => <ChatsPageItem key={chat.id} chat={chat} onClick={() => navigate(`/chat/${chat.id}`)} />)}
        </ul>
    );
};
