import {createElement} from '../../helpers/createElement';
import './chats-page-item.scss';

export const createChatsPageItem = (chat) => {
    const chatItem = createElement('li', 'chat');
    const contentBox = createElement('div', 'chat_content-box');
    const content = createElement('div', 'chat_content');
    const indicators = createElement('div', 'chat_content chat_indicators');
    const avatar = createElement('img', 'chat_avatar');
    const name = createElement('h2', 'chat_name', chat.name);
    const lastMessage = createElement('p', 'chat_last-message', chat.messages.at(-1).text);
    const date = createElement('span', 'chat_date', chat.messages.at(-1).date.toLocaleTimeString());
    const readabilityIndicator = createElement('span', 'material-symbols-outlined', 'done_all');
    const notReadabilityIndicator = createElement('span', 'material-symbols-outlined', 'check');
    const checkedElement = chat.isReadability ? readabilityIndicator : notReadabilityIndicator;

    avatar.src = chat.avatar;
    content.append(name, lastMessage);
    contentBox.append(avatar, content);
    indicators.append(date, checkedElement);
    chatItem.append(contentBox, indicators);

    chatItem.addEventListener('click', () => {
        window.updateState('chat-page', {chatId: chat.id, chatName: chat.name});
    })

    return chatItem;
};