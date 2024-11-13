import {type FC} from 'react';
import type {ChatApiType} from '../../types/chats/index';
import avatar from '../../images/avatar_1.jpg';
import styles from './ChatsPageItem.module.scss';

interface IChatsPageItem {
    chat: ChatApiType;
    onClick(): void;
}

export const ChatsPageItem: FC<IChatsPageItem> = ({chat, onClick}) => {
    const {title, last_message, created_at} = chat;
    const formattedDate = new Date(created_at).toLocaleTimeString();

    return (
        <li className={styles.chat} onClick={onClick}>
            <div className={styles.chatContentBox}>
                <img src={avatar} alt={title} className={styles.chatAvatar} />
                <div className={styles.chatContent}>
                    <h2 className={styles.chatName}>{title}</h2>
                    <p className={styles.chatLastMessage}>{last_message.text}</p>
                </div>
            </div>
            <div className={styles.chatIndicators}>
                <span className={styles.chatDate}>{formattedDate}</span>
            </div>
        </li>
    );
};
