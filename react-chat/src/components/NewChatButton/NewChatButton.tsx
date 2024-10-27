import {type FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './NewChatButton.module.scss';

export const NewChatButton: FC = () => {
    return (
        <div className={styles.newChatButton}>
            <EditIcon className="material-symbols-outlined" />
        </div>
    );
};
