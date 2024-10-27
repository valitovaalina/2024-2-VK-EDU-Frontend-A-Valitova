import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type {ChangeEvent, FC, FormEvent} from 'react';
import styles from './ChatPageFooter.module.scss';

interface IChatPageFooter {
    input: string;
    onChangeInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: FormEvent<HTMLFormElement>): void;
}

export const ChatPageFooter: FC<IChatPageFooter> = ({input, onChangeInput, handleSubmit}) => {
    return (
        <footer>
            <form id="form" className={styles.chatPageForm} onSubmit={handleSubmit}>
                <input
                    value={input}
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
