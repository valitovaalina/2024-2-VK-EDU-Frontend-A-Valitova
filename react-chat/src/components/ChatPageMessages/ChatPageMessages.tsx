import {type FC} from 'react';
import {type Message} from '../../types/types';
import {MessageElement} from '../MessageElement/MessageElement';
import styles from './ChatPageMessages.module.scss';

interface IChatPageMessages {
    messages: Message[];
}

export const ChatPageMessages: FC<IChatPageMessages> = ({messages}) => {
    return (
        <main className={styles.chatPageMessages}>
            <div className={styles.chatPageMessagesScroll}>
                <div id="messages" className={styles.chatPageMessages}>
                    {messages.map((message, index) => <MessageElement key={`${index}_${message.date.getMilliseconds}`} message={message} />)}
                </div>
            </div>
        </main>
    );
};
