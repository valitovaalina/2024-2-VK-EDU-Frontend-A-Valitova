import type {FC} from 'react';
import {useEffect, useState} from 'react';
import {ChatsPageHeader} from '../components/ChatsPageHeader/ChatsPageHeader';
import {ChatsPageItemsList} from '../components/ChatsPageItemsList/ChatsPageItemsList';
import {NewChatButton} from '../components/NewChatButton/NewChatButton';
import type {ChatApiType} from '../types/chats/index';
import {ChatsApi} from '../api/chats';
import {AppApiRoute} from '../consts/AppRoute';
import {useNavigate} from 'react-router-dom';
import {UserApi} from '../api/user';
import {type UserApiType } from '../types/user';

export const ChatsPage: FC = () => {
    const navigate = useNavigate();
    const [chats, setChats] = useState<ChatApiType[]>([]);
    const [users, setUsers] = useState<UserApiType[]>([]);
    const [isChatAdded, setIsChatAdded] = useState(false);
    const chatsApi = new ChatsApi();
    const userApi = new UserApi();
    
    const getUsers = async () => {
        try {
            const data = await userApi.getUsers();
            
            if (data) {
                setUsers(data);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    };

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

    const getChats = async () => {
        try {
            const data = await chatsApi.getChats();

            if (data) {
                setChats(data);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    }

    useEffect(() => {
        getChats();

        return () => setIsChatAdded(false);
    }, [isChatAdded]);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <ChatsPageHeader />
            <ChatsPageItemsList chats={chats} />
            <NewChatButton onClick={addChat} />
        </div>
    );
}