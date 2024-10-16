import {createChatsPageHeader} from '../components/chats-page-header/chats-page-header';
import {createChatsPageItem} from '../components/chats-page-item/chats-page-item';
import {createChatsPageItemsList} from '../components/chats-page-items-list/chats-page-items-list'
import {createNewChatButton} from '../components/new-chat-button/new-chat-button';
import {createElement} from '../helpers/createElement';
import {chatsMocks} from '../mocks/mocks';

export const createChatsPage = ({userId}) => {
    const container = createElement('div', 'chats-page-container');
    const header = createChatsPageHeader();
    const chats = createChatsPageItemsList();
    const newChatButton = createNewChatButton();

    container.append(header, chats, newChatButton);

    return container;
};