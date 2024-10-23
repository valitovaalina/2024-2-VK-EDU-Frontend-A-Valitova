import {type FC} from 'react';
import {type Message} from '../../types/types';
import {MessageElement} from '../MessageElement/MessageElement';
import './ChatPageMessages.scss';

interface IChatPageMessages {
    messages: Message[];
}

export const ChatPageMessages: FC<IChatPageMessages> = ({messages}) => {
    return (
        <main className="chat-page-messages">
            <div className="chat-page-messages-scroll">
                <div id="messages" className="chat-page-messages">
                    {messages.map((message, index) => <MessageElement key={index} message={message} />)}
                </div>
            </div>
        </main>
    );
};
