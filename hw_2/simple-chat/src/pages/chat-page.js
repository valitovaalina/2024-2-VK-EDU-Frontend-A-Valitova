import {createChatPageHeader} from '../components/chat-page-header/index';
import {createChatPageMessages} from '../components/chat-page-messages/index';
import {createChatPageFooter} from '../components/chat-page-footer/index';
import {createElement} from '../helpers/createElement';

export const createChatPage = ({userId}) => {
    const container = createElement('div', 'chat-container');

    container.append(createChatPageHeader(), createChatPageMessages(), createChatPageFooter());

    return container;
};