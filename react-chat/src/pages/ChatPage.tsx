import {useEffect, useState, type FC, type FormEvent, type ChangeEvent, useRef, type RefObject} from 'react';
import {type AxiosError} from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {ChatPageFooter} from '../components/ChatPageFooter/ChatPageFooter';
import {ChatPageHeader} from '../components/ChatPageHeader/ChatPageHeader';
import {ChatPageMessages} from '../components/ChatPageMessages/ChatPageMessages';
import {AppApiRoute} from '../consts/AppRoute';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {getUserChat} from '../store/ChatsReducer/ChatsSelectors';
import {createNewMessage, fetchChat, fetchMessages } from '../store/apiActions';

export const ChatPage: FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const chat = useAppSelector(getUserChat);
    const [inputValue, setInputValue] = useState<string>('');
    const messagesRef = useRef<HTMLUListElement>() as RefObject<HTMLUListElement>;

    
    if (!id) {
        navigate(AppApiRoute.Chats);
        return null;
    }

    useEffect(() => {
        if (!id)
            return;
        
        dispatch(fetchChat({id})).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err);
        });
        dispatch(fetchMessages({id})).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err);
        });

        const timerId = setInterval(() => {
            dispatch(fetchMessages({id})).catch((err: AxiosError) => {
                navigate(AppApiRoute.Login);
                alert(err);
            });
        }, 10000);

        return () => clearInterval(timerId);
    }, [dispatch, id, navigate]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue !== '') {
            dispatch(createNewMessage({messageText: inputValue, chatId: id})).catch((err: AxiosError) => {
                navigate(AppApiRoute.Login);
                alert(err);
            });
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
            <ChatPageMessages messagesRef={messagesRef} />
            <ChatPageFooter handleSubmit={handleSubmit} inputValue={inputValue} onChangeInput={onChangeInput} />
        </div>
    );
};
