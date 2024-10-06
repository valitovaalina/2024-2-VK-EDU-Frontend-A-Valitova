import {createElement} from '../../helpers/createElement';
import './chat-page-messages.scss';

export const createChatPageMessages = () => {
    const main = createElement('main');
    const messagesScroller = createElement('div', 'messages-scroll');
    const messages = createElement('div', 'messages', '', {'id': 'messages'});

    messagesScroller.append(messages);
    main.append(messagesScroller);

    return main;
};