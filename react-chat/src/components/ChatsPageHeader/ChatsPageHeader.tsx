import {type FC} from 'react';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import styles from './ChatsPageHeader.module.scss';
import {AppRoute} from '../../consts/AppRoute';

export const ChatsPageHeader: FC = () => {
    const navigate = useNavigate();
    const onPersonIconClick = () => navigate(AppRoute.Profile);

    return (
        <header className={styles.header}>
            <MenuIcon className={styles.materialSymbolsOutlined} />
            <h1 className={styles.headerName}>Чаты</h1>
            <div className={styles.headerIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
                <PersonIcon className={styles.materialSymbolsOutlined} onClick={onPersonIconClick} />
            </div>
        </header>
    );
};
