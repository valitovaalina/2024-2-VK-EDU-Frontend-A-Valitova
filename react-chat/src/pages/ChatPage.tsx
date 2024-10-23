import {useEffect, useState, type SetStateAction, type Dispatch, type FC, type FormEvent, type ChangeEvent} from 'react';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import type {Message, Chat} from '../types/types';
import {loadMessagesFromLocalStorage} from '../utils/loadMessagesFromLocalStorage';
import {saveMessageToLocalStorage} from '../utils/saveMessageToLocalStorage';

interface IChatPage {
    chat: Chat;
    setId: Dispatch<SetStateAction<string | null>>;
}

export const ChatPage: FC<IChatPage> = ({chat, setId}) => {
    const [messages, setMessages] = useState<Message[]>(chat.messages);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        setMessages(loadMessagesFromLocalStorage(chat.id));
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (input !== '') {
            const message = {text: input, date: new Date()};
            const newMessages = [...messages, message];
            saveMessageToLocalStorage(message, chat.id);
            setMessages(newMessages);
            setInput('');
        }
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    return (
        <div>
            <ChatPageHeader chatName={chat.name} setId={setId} />
            <ChatPageMessages messages={messages} />
            <ChatPageFooter handleSubmit={handleSubmit} input={input} onChangeInput={onChangeInput} />
        </div>
    );
};
