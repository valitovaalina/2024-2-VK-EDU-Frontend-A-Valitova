import {type AxiosError} from 'axios';
import {useState, type FC, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ProfileBasic} from '../components/ProfileBasic/ProfileBasic';
import {ProfileBasicEdit} from '../components/ProfileBasicEdit/ProfileBasicEdit';
import {ProfilePageHeader} from '../components/ProfilePageHeader/ProfilePageHeader';
import {AppApiRoute} from '../consts/AppRoute';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {fetchUser} from '../store/apiActions';
import {getUser} from '../store/UserReducer/UserSelectors';

export const ProfilePage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser);
    const [editingBasic, setEditingBasic] = useState(false);
    const editBasicHandler = () => setEditingBasic((editingBasic) => !editingBasic);

    useEffect(() => {
        dispatch(fetchUser()).catch((err: AxiosError) => {
            navigate(AppApiRoute.Login);
            alert(err);
        });
    }, [dispatch]);

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