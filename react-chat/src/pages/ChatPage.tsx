import {useEffect, useState, type FC, type FormEvent, type ChangeEvent, useRef} from 'react';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import type {Message, Chat} from '../types/types';
import {loadMessagesFromLocalStorage} from '../api/chatPage/loadMessagesFromLocalStorage';
import {saveMessageToLocalStorage} from '../api/chatPage/saveMessageToLocalStorage';

interface IChatPage {
    chat: Chat | null;
    handleSetId(id: string): void;
}

export const ChatPage: FC<IChatPage> = ({chat, handleSetId}) => {
    if (!chat) return null;

    const [messages, setMessages] = useState<Message[]>(chat.messages);
    const [inputValue, setInputValue] = useState<string>('');
    const messagesRef = useRef<any>();

    useEffect(() => {
        const messagesFromLocalStorage = loadMessagesFromLocalStorage(chat.id);

        if (messagesFromLocalStorage !== null) {
            setMessages(messagesFromLocalStorage);
        }
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue !== '') {
            const id = `${messages.length + 1}`;
            const message = {id, text: inputValue, date: new Date()};
            const newMessages = [...messages, message];
            saveMessageToLocalStorage(message, chat.id);
            setMessages(newMessages);
            setInputValue('');

            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
            }
        }
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <ChatPageHeader chatName={chat.name} handleSetId={handleSetId} />
            <ChatPageMessages messages={messages} messagesRef={messagesRef} />
            <ChatPageFooter handleSubmit={handleSubmit} inputValue={inputValue} onChangeInput={onChangeInput} />
        </div>
    );
};
