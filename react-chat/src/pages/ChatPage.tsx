import {useEffect, useState, type FC, type FormEvent, type ChangeEvent} from 'react';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import type {Message, Chat} from '../types/types';
import {loadMessagesFromLocalStorage} from '../api/chatPage/loadMessagesFromLocalStorage';
import {saveMessageToLocalStorage} from '../api/chatPage/saveMessageToLocalStorage';

interface IChatPage {
    chat: Chat | null;
    setId(id: string): void;
}

export const ChatPage: FC<IChatPage> = ({chat, setId}) => {
    if (!chat) return null;

    const [messages, setMessages] = useState<Message[]>(chat.messages);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        const messagesFromLocalStorage = loadMessagesFromLocalStorage(chat.id);

        if (messagesFromLocalStorage !== null) {
            setMessages(messagesFromLocalStorage);
        }
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue !== '') {
            const message = {text: inputValue, date: new Date()};
            const newMessages = [...messages, message];
            saveMessageToLocalStorage(message, chat.id);
            setMessages(newMessages);
            setInputValue('');
        }
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <ChatPageHeader chatName={chat.name} setId={setId} />
            <ChatPageMessages messages={messages} />
            <ChatPageFooter handleSubmit={handleSubmit} inputValue={inputValue} onChangeInput={onChangeInput} />
        </div>
    );
};
