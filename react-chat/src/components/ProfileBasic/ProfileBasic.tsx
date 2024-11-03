import {type FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import type {User} from '../../types/user/index';
import {ProfileBasicItem} from '../ProfileBasicItem/ProfileBasicItem';
import avatar from '../../images/avatar_1.jpg';
import styles from './ProfileBasic.module.scss';

interface IProfileBasic {
    user: User;
    editBasicHandler: () => void;
}

export const ProfileBasic: FC<IProfileBasic> = ({user, editBasicHandler}) => {
    return (
        <div className={styles.profileBasic}>
            <div>
                <img src={avatar} className={styles.userImg} />
            </div>
            <h1 className={styles.header}>
                Основное <EditIcon className={styles.materialSymbolsOutlined} onClick={editBasicHandler} />
            </h1>
            <div>
                <ProfileBasicItem property={'Имя'} value={user.first_name} />
                <ProfileBasicItem property={'Фамилия'} value={user.last_name} />
                <ProfileBasicItem property={'О себе'} value={user.bio} />
            </div>
        </div>
    );
}