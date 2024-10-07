import {createChatsPageItem} from '../chats-page-item/chats-page-item';
import {createElement} from '../../helpers/createElement';
import {chatsMocks} from '../../mocks/mocks';
import './chats-page-items-list.scss';

export const createChatsPageItemsList = (chat) => {
    const chats = createElement('ul', 'chats-page-items-list');

    chats.append(...chatsMocks.map((e) => createChatsPageItem(e)));

    return chats;
};