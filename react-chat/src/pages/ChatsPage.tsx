import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {type AxiosError} from 'axios';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';
import {AppApiRoute} from '../consts/AppRoute';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {getUsers} from '../store/UserReducer/UserSelectors';
import {createNewChat, fetchChats, fetchUsers} from '../store/apiActions';

export const ChatsPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsers);
    const [isChatAdded, setIsChatAdded] = useState(false);

    const addChat = async () => {
        const guid = users[Math.floor(Math.random() * users.length)].id;

        dispatch(createNewChat({memberId: guid})).catch((err: AxiosError) => {
            navigate(AppApiRoute.Chats);
            alert(err.message);
        });

        setIsChatAdded(true);
    }

    useEffect(() => {
        dispatch(fetchChats()).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err.message);
        });

        return () => setIsChatAdded(false);
    }, [isChatAdded, dispatch]);

    useEffect(() => {
        dispatch(fetchUsers()).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err.message);
        });
    }, [dispatch]);

    return (
        <div>
            <ChatsPageHeader />
            <ChatsPageItemsList />
            <NewChatButton onClick={addChat} />
        </div>
    );
}