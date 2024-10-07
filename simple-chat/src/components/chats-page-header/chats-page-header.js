import {createElement} from '../../helpers/createElement';
import './chats-page-header.scss';

export const createChatsPageHeader = () => {
    const header = createElement('header', 'chats-page-header');
    const headerTitle = createElement('h1', 'chats-page-header_name', 'Чаты');
    const searchIcon = createElement('span', 'material-symbols-outlined', 'search');
    const menuIcon = createElement('span', 'material-symbols-outlined', 'menu');

    header.append(menuIcon, headerTitle, searchIcon);

    return header;
};