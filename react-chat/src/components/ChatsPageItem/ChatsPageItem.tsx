import {type FC} from 'react';
import type {ChatApiType} from '../../types/chats/index';
import styles from './ChatsPageItem.module.scss';
import {LazyImage} from '../LazyImage/LazyImage';

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
                <LazyImage
                    src={chat.avatar}
                    alt={title}
                    style={{
                        "width": "56px",
                        "height": "56px",
                        "marginRight": "20px",
                        "borderRadius": "56px"
                    }}
                />
                <div className={styles.chatContent}>
                    <h2 className={styles.chatName}>{title}</h2>
                    <p className={styles.chatLastMessage}>{last_message ? last_message.text : ''}</p>
                </div>
            </div>
            <div className={styles.chatIndicators}>
                <span className={styles.chatDate}>{formattedDate}</span>
            </div>
        </li>
    );
};
