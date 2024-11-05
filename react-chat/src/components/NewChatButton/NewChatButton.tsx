import {type FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './NewChatButton.module.scss';

interface INewChatButton {
    onClick(): void;
}

export const NewChatButton: FC<INewChatButton> = ({onClick}) => {
    return (
        <div className={styles.newChatButton} onClick={onClick}>
            <EditIcon className="material-symbols-outlined" />
        </div>
    );
};
