import {createElement} from '../../helpers/createElement';
import './chat-page-header.scss';

export const createChatPageHeader = (chatName) => {
    const header = createElement('header', 'chat-page-header');
    const headerTitle = createElement('h1', 'chat-page-header_name', chatName);
    const headerIcons = createElement('div', 'chat-page-header_icons');
    const searchIcon = createElement('span', 'material-symbols-outlined', 'search');
    const settingsIcon = createElement('span', 'material-symbols-outlined', 'settings');
    const returnedIcon = createElement('span', 'material-symbols-outlined', 'arrow_back');

    headerIcons.append(searchIcon, settingsIcon);
    header.append(returnedIcon, headerTitle, headerIcons);

    returnedIcon.addEventListener('click', () => {
        window.updateState('chats-page');
    })

    return header;
};