import {createElement} from '../../helpers/createElement';
import './chat-page-header.scss';

export const createChatPageHeader = () => {
    const header = createElement('header', 'header');
    const headerTitle = createElement('span', 'header_name', 'Иван');
    const headerIcons = createElement('div', 'header_icons');
    const searchIcon = createElement('span', 'material-symbols-outlined', 'search');
    const settingsIcon = createElement('span', 'material-symbols-outlined', 'settings');

    headerIcons.append(searchIcon, settingsIcon);
    header.append(headerTitle, headerIcons);

    return header;
};