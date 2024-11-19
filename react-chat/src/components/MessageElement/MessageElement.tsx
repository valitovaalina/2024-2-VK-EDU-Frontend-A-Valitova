import {type FC} from 'react';
import type {MessageApiType} from '../../types/messages/index';

import styles from './MessageElement.module.scss';

interface IMessageElement {
    message: MessageApiType;
}

export const MessageElement: FC<IMessageElement> = ({message}) => {
    const formattedDate = new Date(message.created_at).toLocaleTimeString();

    return (
        <li className={styles.message}>
            <div className={styles.messageContent}>
                <p className={styles.messageText}>{message.text}</p>
                <span className={styles.messageDate}>{formattedDate}</span>
            </div>
        </li>
    );
};
