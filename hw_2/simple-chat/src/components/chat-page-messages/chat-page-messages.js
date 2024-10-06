import {createElement} from '../../helpers/createElement';
import './chat-page-messages.scss';

export const createChatPageMessages = () => {
    const main = createElement('main');
    const messagesScroller = createElement('div', 'chat-page-messages-scroll');
    const messagesContainer = createElement('div', 'chat-page-messages', '', {'id': 'messages'});

    messagesScroller.append(messagesContainer);
    main.append(messagesScroller);

    return {main, messagesContainer};
};