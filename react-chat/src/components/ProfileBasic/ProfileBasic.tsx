import {type FC} from 'react';
import {useNavigate} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import type {UserApiType} from '../../types/user/index';
import {ProfileBasicItem} from '../ProfileBasicItem/ProfileBasicItem';
import styles from './ProfileBasic.module.scss';
import {useAuth} from '../../hooks/useAuth';
import {LocalStorageService} from '../../services/localStorageService';
import {AppApiRoute} from '../../consts/AppRoute';
import {LazyImage} from '../LazyImage/LazyImage';

interface IProfileBasic {
    user: UserApiType;
    editBasicHandler: () => void;
}

export const ProfileBasic: FC<IProfileBasic> = ({user, editBasicHandler}) => {
    const navigate = useNavigate();
    const {setUserAuth} = useAuth();
    const localStorageService = new LocalStorageService();

    const handleExit = () => {
        localStorageService.removeTokens();
        setUserAuth(false);
        navigate(AppApiRoute.Login);
    }

    return (
        <div className={styles.profileBasic}>
            <div className={styles.content}>
                <LazyImage
                    src={user.avatar}
                    alt={'profile'}
                    style={{
                        "width": "150px",
                        "height": "150px",
                        "borderRadius": "100%",
                    }}
                />
            </div>
            <h1 className={styles.header}>
                Основное <EditIcon className={styles.materialSymbolsOutlined} onClick={editBasicHandler} />
            </h1>
            <div>
                <ProfileBasicItem property={'Имя'} value={user.first_name} />
                <ProfileBasicItem property={'Фамилия'} value={user.last_name} />
                <ProfileBasicItem property={'О себе'} value={user?.bio} />
            </div>
            <button className={styles.button} onClick={handleExit}>Выйти</button>
        </div>
    );
}