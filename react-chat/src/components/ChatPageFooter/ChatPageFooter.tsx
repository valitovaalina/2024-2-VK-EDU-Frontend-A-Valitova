import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type {ChangeEvent, FC, FormEvent} from 'react';
import './ChatPageFooter.scss';

interface IChatPageFooter {
    input: string;
    onChangeInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: FormEvent<HTMLFormElement>): void;
}

export const ChatPageFooter: FC<IChatPageFooter> = ({input, onChangeInput, handleSubmit}) => {
    return (
        <footer>
            <form id="form" className="chat-page-form" onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={onChangeInput}
                    type="text"
                    name="message-text"
                    placeholder="Сообщение"
                    autoFocus
                    className="chat-page-form_input"
                />
                <button type="submit" id="form_send-button" className="chat-page-form_send-button">
                    <ChevronRightIcon className="material-symbols-outlined" />
                </button>
            </form>
        </footer>
    );
};
