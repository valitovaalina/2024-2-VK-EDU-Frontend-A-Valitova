import {type FC, type RefObject} from 'react';
import {useAppSelector} from '../../hooks/useStore';
import {getMessages} from '../../store/MessagesReducer/MessagesSelectors';
import {MessageElement} from '../MessageElement/MessageElement';
import styles from './ChatPageMessages.module.scss';

interface IChatPageMessages {
    messagesRef: RefObject<HTMLUListElement>;
}

export const ChatPageMessages: FC<IChatPageMessages> = ({messagesRef}) => {
    const messages = useAppSelector(getMessages);
    
    return (
        <main className={styles.messages}>
            <div className={styles.messagesScroll}>
                <ul id="messages" className={styles.messages} ref={messagesRef}>
                    {messages.map((message) => <MessageElement key={message.id} message={message} />)}
                </ul>
            </div>
        </main>
    );
};
