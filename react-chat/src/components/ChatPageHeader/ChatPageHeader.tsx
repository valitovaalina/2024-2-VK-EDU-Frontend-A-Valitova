import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './ChatPageHeader.module.scss';
import {AppRoute} from '../../consts/AppRoute';

interface IChatPageHeader {
    chatName: string;
}

export const ChatPageHeader: FC<IChatPageHeader> = ({chatName}) => {
    const navigate = useNavigate();
    
    return (
        <header className={styles.chatPageHeader}>
            <ArrowBackIcon className={styles.materialSymbolsOutlined} onClick={() => navigate(AppRoute.Chats)} />
            <h1 className={styles.chatPageHeaderName}>{chatName}</h1>
            <div className={styles.chatPageHeaderIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
                <SettingsIcon className={styles.materialSymbolsOutlined} />
            </div>
        </header>
    );
};
