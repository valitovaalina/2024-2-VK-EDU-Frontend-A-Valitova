import {type FC} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './ChatsPageHeader.module.scss';

export const ChatsPageHeader: FC = () => {
    return (
        <header className={styles.chatsPageHeader}>
            <MenuIcon className={styles.materialSymbolsOutlined} />
            <h1 className={styles.chatsPageHeaderName}>Чаты</h1>
            <SearchIcon className={styles.materialSymbolsOutlined} />
        </header>
    );
};
