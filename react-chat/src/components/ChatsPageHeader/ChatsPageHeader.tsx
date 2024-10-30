import {type FC} from 'react';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import styles from './ChatsPageHeader.module.scss';
import {AppRoute} from '../../consts/AppRoute';

export const ChatsPageHeader: FC = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.chatsPageHeader}>
            <MenuIcon className={styles.materialSymbolsOutlined} />
            <h1 className={styles.chatsPageHeaderName}>Чаты</h1>
            <div className={styles.chatsPageHeaderIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
                <PersonIcon className={styles.materialSymbolsOutlined} onClick={() => navigate(AppRoute.Profile)}/>
            </div>
        </header>
    );
};
