import {type FC} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {type Chat} from '../../types/types';
import avatar from '../../images/avatar_1.jpg';
import styles from './ChatsPageItem.module.scss';

interface IChatsPageItem {
    chat: Chat;
    onClick(): void;
}

export const ChatsPageItem: FC<IChatsPageItem> = ({chat, onClick}) => {
    const {name, messages, isReadability = false} = chat;
    const latestMessage = messages[messages.length - 1];
    const formattedDate = new Date(latestMessage.date).toLocaleTimeString();

    return (
        <li className={styles.chat} onClick={onClick}>
            <div className={styles.chatContentBox}>
                <img src={avatar} alt={name} className={styles.chatAvatar} />
                <div className={styles.chatContent}>
                    <h2 className={styles.chatName}>{name}</h2>
                    <p className={styles.chatLastMessage}>{latestMessage.text}</p>
                </div>
            </div>
            <div className={styles.chatIndicators}>
                <span className={styles.chatDate}>{formattedDate}</span>
                {isReadability ? (
                    <DoneAllIcon className={styles.materialSymbolsOutlined} />
                ) : (
                    <CheckIcon className={styles.materialSymbolsOutlined} />
                )}
            </div>
        </li>
    );
};
