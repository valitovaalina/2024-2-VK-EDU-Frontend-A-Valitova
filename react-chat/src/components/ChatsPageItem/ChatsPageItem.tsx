import {type FC} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {type Chat} from '../../types/types';
import avatar from '../../images/avatar_1.jpg';
import './ChatsPageItem.scss';

interface IChatsPageItem {
    chat: Chat;
    onClick(): void;
}

export const ChatsPageItem: FC<IChatsPageItem> = ({chat, onClick}) => {
    const {name, messages, isReadability = false} = chat;
    const latestMessage = messages[messages.length - 1];
    const formattedDate = new Date(latestMessage.date).toLocaleTimeString();

    return (
        <li className="chat" onClick={onClick}>
            <div className="chat_content-box">
                <img src={avatar} alt={name} className="chat_avatar" />
                <div className="chat_content">
                    <h2 className="chat_name">{name}</h2>
                    <p className="chat_last-message">{latestMessage.text}</p>
                </div>
            </div>
            <div className="chat_content chat_indicators">
                <span className="chat_date">{formattedDate}</span>
                {isReadability ? (
                    <DoneAllIcon className="material-symbols-outlined" />
                ) : (
                    <CheckIcon className="material-symbols-outlined" />
                )}
            </div>
        </li>
    );
};
