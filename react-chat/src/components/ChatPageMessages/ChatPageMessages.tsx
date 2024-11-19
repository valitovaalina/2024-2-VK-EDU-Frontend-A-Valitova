import {type FC, type RefObject} from 'react';
import type {MessageApiType} from '../../types/messages/index';
import {MessageElement} from '../MessageElement/MessageElement';
import styles from './ChatPageMessages.module.scss';

interface IChatPageMessages {
    messagesRef: RefObject<HTMLDivElement>;
    messages: MessageApiType[];
}

export const ChatPageMessages: FC<IChatPageMessages> = ({messagesRef, messages}) => {
    return (
        <main className={styles.messages}>
            <div className={styles.messagesScroll}>
                <div id="messages" className={styles.messages} ref={messagesRef}>
                    {messages.map((message) => <MessageElement key={message.id} message={message} />)}
                </div>
            </div>
        </main>
    );
};
