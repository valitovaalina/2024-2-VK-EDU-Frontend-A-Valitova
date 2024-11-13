import {useEffect, useState, type FC, type FormEvent, type ChangeEvent, useRef} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import type {MessageApiType} from '../types/messages/index';
import {AppApiRoute} from '../consts/AppRoute';
import {MessagesApi} from '../api/messages';
import {ChatsApi} from '../api/chats';
import type {ChatApiType} from '../types/chats';

export const ChatPage: FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');
    const [messages, setMessages] = useState<MessageApiType[] | []>([]);
    const [chat, setChat] = useState<ChatApiType | null>(null);
    const messagesRef = useRef<any>();
    const messagesApi = new MessagesApi();
    const chatsApi = new ChatsApi();

    if (!id) {
        navigate(AppApiRoute.Chats);
        return null;
    }

    const getChat = async () => {
        try {
            const data = await chatsApi.getChat(id);
            
            if (data) {
                setChat(data);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    };

    const getMessages = async () => {
        try {
            const data = await messagesApi.getMessages(id);
            
            if (data) {
                setMessages(data.results);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    };

    const sendMessage = async (text: string) => {
        try {
            const data = await messagesApi.createNewMessage(text, id);
            
            if (data) {
                setMessages((messages: MessageApiType[] | null) => messages ? [...messages, data] : [data]);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    }

    useEffect(() => {
        getChat()
        getMessages();

        const timerId = setInterval(() => {
            getMessages();
        }, 10000);

        return () => clearInterval(timerId);
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue !== '') {
            sendMessage(inputValue);
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
            <ChatPageHeader chatName={chat?.title} />
            <ChatPageMessages messages={messages} messagesRef={messagesRef} />
            <ChatPageFooter handleSubmit={handleSubmit} inputValue={inputValue} onChangeInput={onChangeInput} />
        </div>
    );
};
