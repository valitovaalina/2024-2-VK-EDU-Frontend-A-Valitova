import type {Dispatch, FC, SetStateAction} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import './ChatPageHeader.scss';

interface IChatPageHeader {
    chatName: string;
    setId: Dispatch<SetStateAction<string | null>>;
}

export const ChatPageHeader: FC<IChatPageHeader> = ({chatName, setId}) => {
    return (
        <header className="chat-page-header">
            <ArrowBackIcon className="material-symbols-outlined" onClick={() => setId(null)} />
            <h1 className="chat-page-header_name">{chatName}</h1>
            <div className="chat-page-header_icons">
                <SearchIcon className="material-symbols-outlined" />
                <SettingsIcon className="material-symbols-outlined" />
            </div>
        </header>
    );
};
