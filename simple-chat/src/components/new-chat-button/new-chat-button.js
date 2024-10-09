import {createElement} from '../../helpers/createElement';
import './new-chat-button.scss';

export const createNewChatButton = () => {
    const newChatButton = createElement('div', 'new-chat-button');
    const newChatButtonIcon = createElement('span', 'material-symbols-outlined', 'edit');

    newChatButton.append(newChatButtonIcon);

    return newChatButton;
};