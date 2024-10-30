import {useEffect, useState, type FC, type FormEvent, type ChangeEvent, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import type {Message} from '../types/types';
import {loadMessagesFromLocalStorage} from '../api/chatPage/loadMessagesFromLocalStorage';
import {saveMessageToLocalStorage} from '../api/chatPage/saveMessageToLocalStorage';
import {getChatsFromLocalStorage} from '../api/chatsPage/getChatsFromLocalStorage';

export const ChatPage: FC = () => {
    const {id} = useParams();
    const filterChat = getChatsFromLocalStorage().filter((el) => el.id === id);
    const chat = filterChat ? filterChat[0] : null;

    useEffect(() => {
        const messagesFromLocalStorage = id ? loadMessagesFromLocalStorage(id) : null;

        if (messagesFromLocalStorage !== null) {
            setMessages(messagesFromLocalStorage);
        }
    }, []);

    if (!chat) return null;

    const [messages, setMessages] = useState<Message[]>(chat.messages);
    const [inputValue, setInputValue] = useState<string>('');
    const messagesRef = useRef<any>();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue !== '') {
            const id = `${messages.length + 1}`;
            const message = {id, text: inputValue, date: new Date()};
            const newMessages = [...messages, message];
            saveMessageToLocalStorage(message, id);
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
            <ChatPageHeader chatName={chat.name} />
            <ChatPageMessages messages={messages} messagesRef={messagesRef} />
            <ChatPageFooter handleSubmit={handleSubmit} inputValue={inputValue} onChangeInput={onChangeInput} />
        </div>
    );
};
