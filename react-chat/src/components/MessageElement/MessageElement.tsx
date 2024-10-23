import {type FC} from 'react';
import {type Message} from '../../types/types';
import './MessageElement.scss';

interface IMessageElement {
    message: Message;
}

export const MessageElement: FC<IMessageElement> = ({message}) => {
    const formattedDate = new Date(message.date).toLocaleTimeString();

    return (
        <li className="message">
            <div className="message-content">
                <p className="message-text">{message.text}</p>
                <span className="message-date">{formattedDate}</span>
            </div>
        </li>
    );
};
