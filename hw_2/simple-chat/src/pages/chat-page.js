import {createChatPageHeader} from '../components/chat-page-header/chat-page-header';
import {createChatPageMessages} from '../components/chat-page-messages/chat-page-messages';
import {createChatPageFooter} from '../components/chat-page-footer/chat-page-footer';
import {createElement} from '../helpers/createElement';

export const createChatPage = (chatName, chatId) => {
    const container = createElement('div', 'chat-container');
    const header = createChatPageHeader(chatName);
    const {main, messagesContainer} = createChatPageMessages();
    const {footer, form, button, input} = createChatPageFooter();

    container.append(header, main, footer);

    form.addEventListener('submit', (e) => handleSubmit(e, input, messagesContainer, chatId));
    form.addEventListener('keypress', (e) => handleKeyPress(e));
    button.addEventListener('click', (e) => handleSubmit(e, input, messagesContainer, chatId));
    loadMessagesFromLocalStorage(messagesContainer, chatId);

    return container;
};

const getMessageElement = (message) => {
    const messageDiv = createElement('li', 'message');
    const messageContentDiv = createElement('div', 'message-content');
    const messageTextP = createElement('p', 'message-text', message.text);
    const messageDateSpan = createElement('span', 'message-date', new Date(message.date).toLocaleTimeString());

    messageDiv.append(messageContentDiv);
    messageContentDiv.append(messageTextP, messageDateSpan);

    return messageDiv;
};

const getChatsFromLocalStorage = () => JSON.parse(localStorage.getItem('chats')) || [];

const loadMessagesFromLocalStorage = (messagesContainer, chatId) => {
    const chat = getChatsFromLocalStorage().filter((e) => e.id === chatId)[0];
    const fragment = document.createDocumentFragment();

    chat.messages.forEach(message => {
        const messageElement = getMessageElement({text: message.text, name: chat.name, date: message.date});
        fragment.appendChild(messageElement);
    });

    messagesContainer.appendChild(fragment);
};

const saveMessageToLocalStorage = (message, chatId) => {
    const chats = getChatsFromLocalStorage();
    const chat = chats.filter((e) => e.id === chatId)[0];

    chat.messages.push(message);
    localStorage.setItem('chats', JSON.stringify(chats));
};

const handleSubmit = (event, input, messagesContainer, chatId) => {
    event.preventDefault();

    const messageText = input.value.trim();

    if (!messageText) {
        return;
    }

    const message = {
        text: messageText,
        name: 'Я',
        date: new Date(),
    };
    messagesContainer.append(getMessageElement(message));
    saveMessageToLocalStorage(message, chatId);
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
};