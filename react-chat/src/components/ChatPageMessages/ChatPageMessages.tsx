import {type FC, type RefObject} from 'react';
import {type Message} from '../../types/types';
import {MessageElement} from '../MessageElement/MessageElement';
import styles from './ChatPageMessages.module.scss';

interface IChatPageMessages {
    messagesRef: RefObject<HTMLDivElement>;
    messages: Message[];
}

export const ChatPageMessages: FC<IChatPageMessages> = ({messagesRef, messages}) => {
    return (
        <main className={styles.chatPageMessages}>
            <div className={styles.chatPageMessagesScroll}>
                <div id="messages" className={styles.chatPageMessages} ref={messagesRef}>
                    {messages.map((message) => <MessageElement key={message.id} message={message} />)}
                </div>
            </div>
        </main>
    );
};
