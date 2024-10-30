import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import {AppRoute} from '../../consts/AppRoute';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = (): React.ReactElement  => {
    const navigate = useNavigate();
    
    return (
        <header className={styles.profilePageHeader}>
            <ArrowBackIcon className={styles.materialSymbolsOutlined} onClick={() => navigate(AppRoute.Chats)} />
            <h1 className={styles.profilePageHeaderName}>{'Профиль'}</h1>
            <div className={styles.profilePageHeaderIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
            </div>
        </header>
    );
}