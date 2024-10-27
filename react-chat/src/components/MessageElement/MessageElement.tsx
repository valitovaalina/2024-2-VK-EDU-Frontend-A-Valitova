import {type FC} from 'react';
import {type Message} from '../../types/types';
import styles from './MessageElement.module.scss';

interface IMessageElement {
    message: Message;
}

export const MessageElement: FC<IMessageElement> = ({message}) => {
    const formattedDate = new Date(message.date).toLocaleTimeString();

    return (
        <li className={styles.message}>
            <div className={styles.messageContent}>
                <p className={styles.messageText}>{message.text}</p>
                <span className={styles.messageDate}>{formattedDate}</span>
            </div>
        </li>
    );
};
