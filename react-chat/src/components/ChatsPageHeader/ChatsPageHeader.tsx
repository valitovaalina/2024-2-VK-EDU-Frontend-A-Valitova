import {type FC} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import './ChatsPageHeader.scss';

export const ChatsPageHeader: FC = () => {
    return (
        <header className="chats-page-header">
            <MenuIcon className="material-symbols-outlined" />
            <h1 className="chats-page-header_name">Чаты</h1>
            <SearchIcon className="material-symbols-outlined" />
        </header>
    );
};
