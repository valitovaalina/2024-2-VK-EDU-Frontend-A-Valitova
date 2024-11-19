import {useState, type FC, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserApi} from '../api/user';
import {ProfileBasic} from '../components/ProfileBasic/ProfileBasic';
import {ProfileBasicEdit} from '../components/ProfileBasicEdit/ProfileBasicEdit';
import {ProfilePageHeader} from '../components/ProfilePageHeader/ProfilePageHeader';
import {AppApiRoute} from '../consts/AppRoute';
import {type UserApiType } from '../types/user';

export const ProfilePage: FC = () => {
    const navigate = useNavigate();
    const [editingBasic, setEditingBasic] = useState(false);
    const [user, setUser] = useState<UserApiType | null>(null);
    const editBasicHandler = () => setEditingBasic((editingBasic) => !editingBasic);
    const userApi = new UserApi();

    const getUser = async () => {
        try {
            const data = await userApi.getUser();

            if (data) {
                setUser(data);
            }
        } catch (error) {
            navigate(AppApiRoute.Login);
            alert(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    if (!user) {
        navigate(AppApiRoute.Login);
        return null;
    }

    return (
        <div>
            <ProfilePageHeader />
            {!editingBasic
                ? <ProfileBasic user={user} editBasicHandler={editBasicHandler} />
                : <ProfileBasicEdit user={user} editBasicHandler={editBasicHandler} />
            }
        </div>
    );
}