import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {type AxiosError} from 'axios';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';
import {ChatsApi} from '../api/chats';
import {AppApiRoute} from '../consts/AppRoute';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {getUsers} from '../store/UserReducer/UserSelectors';
import {fetchChats, fetchUsers} from '../store/apiActions';

export const ChatsPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsers);
    const [isChatAdded, setIsChatAdded] = useState(false);
    const chatsApi = new ChatsApi();

    const addChat = async () => {
        try {
            const guid = users[Math.floor(Math.random() * users.length)].id;

            await chatsApi.createNewChat(guid);
            setIsChatAdded(true);
        } catch (error) {
            navigate(AppApiRoute.Chats);
            alert(error);
        }
    }

    useEffect(() => {
        dispatch(fetchChats()).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err);
        });

        return () => setIsChatAdded(false);
    }, [isChatAdded, dispatch]);

    useEffect(() => {
        dispatch(fetchUsers()).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err);
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