import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type {ChangeEvent, FC, FormEvent} from 'react';
import styles from './ChatPageFooter.module.scss';

interface IChatPageFooter {
    inputValue: string;
    onChangeInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: FormEvent<HTMLFormElement>): void;
}

export const ChatPageFooter: FC<IChatPageFooter> = ({inputValue, onChangeInput, handleSubmit}) => {
    return (
        <footer>
            <form id="form" className={styles.chatPageForm} onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={onChangeInput}
                    type="text"
                    name="message-text"
                    placeholder="Сообщение"
                    autoFocus
                    className={styles.chatPageFormInput}
                />
                <button type="submit" id="form_send-button" className={styles.chatPageFormSendButton}>
                    <ChevronRightIcon className={styles.materialSymbolsOutlined} />
                </button>
            </form>
        </footer>
    );
};
