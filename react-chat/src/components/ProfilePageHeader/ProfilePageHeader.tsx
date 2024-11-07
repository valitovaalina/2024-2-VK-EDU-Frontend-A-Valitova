import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import {AppApiRoute} from '../../consts/AppRoute';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = (): React.ReactElement  => {
    const navigate = useNavigate();
    const onArrowBackIconClick = () => navigate(AppApiRoute.Chats);
    
    return (
        <header className={styles.header}>
            <ArrowBackIcon className={styles.materialSymbolsOutlined} onClick={onArrowBackIconClick} />
            <h1 className={styles.headerName}>{'Профиль'}</h1>
            <div className={styles.headerIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
            </div>
        </header>
    );
}