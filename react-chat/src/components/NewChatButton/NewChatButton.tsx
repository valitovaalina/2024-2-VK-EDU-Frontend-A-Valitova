import {type FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './NewChatButton.scss';

export const NewChatButton: FC = () => {
    return (
        <div className="new-chat-button">
            <EditIcon className="material-symbols-outlined" />
        </div>
    );
};
