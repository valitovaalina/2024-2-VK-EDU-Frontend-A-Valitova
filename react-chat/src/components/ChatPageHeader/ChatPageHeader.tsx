import type {Dispatch, FC, SetStateAction} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './ChatPageHeader.module.scss';

interface IChatPageHeader {
    chatName: string;
    setId: Dispatch<SetStateAction<string | null>>;
}

export const ChatPageHeader: FC<IChatPageHeader> = ({chatName, setId}) => {
    return (
        <header className={styles.chatPageHeader}>
            <ArrowBackIcon className={styles.materialSymbolsOutlined} onClick={() => setId(null)} />
            <h1 className={styles.chatPageHeaderName}>{chatName}</h1>
            <div className={styles.chatPageHeaderIcons}>
                <SearchIcon className={styles.materialSymbolsOutlined} />
                <SettingsIcon className={styles.materialSymbolsOutlined} />
            </div>
        </header>
    );
};
