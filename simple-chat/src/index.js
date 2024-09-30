import './index.css';

const form = document.getElementById('form');
const input = document.getElementById('form_input');
const messagesContainer = document.getElementById('messages');
const sendButton = document.getElementById('form_send-button');

const getMessageElement = (message) => {
    const messageDiv = document.createElement('li');
    const messageContentDiv = document.createElement('div');
    const messageTextP = document.createElement('p');
    const messageDateSpan = document.createElement('span');

    messageDiv.className = 'message';
    messageContentDiv.className = 'message-content';
    messageTextP.className = 'message-text';
    messageDateSpan.className = 'message-date';

    messageTextP.innerText = message.text;
    messageDateSpan.innerHTML = message.date;
    messageDiv.append(messageContentDiv);
    messageContentDiv.append(messageTextP);
    messageContentDiv.append(messageDateSpan);

    return messageDiv;
};

const getMessagesFromLocalStorage = () => JSON.parse(localStorage.getItem('messages')) || [];

const loadMessagesFromLocalStorage = () => {
    const messages = getMessagesFromLocalStorage();
    const fragment = document.createDocumentFragment();

    messages.forEach(message => {
        const messageElement = getMessageElement({ text: message.text, name: message.name, date: message.date });
        fragment.appendChild(messageElement);
    });

    messagesContainer.appendChild(fragment);
};

const saveMessageToLocalStorage = (message) => {
    const messages = getMessagesFromLocalStorage();
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
};

const handleSubmit = (event) => {
    event.preventDefault();

    const messageText = input.value.trim();

    if (!messageText) {
        return;
    }

    const message = {
        text: messageText,
        name: 'Я',
        date: new Date().toLocaleTimeString(),
    };
    messagesContainer.append(getMessageElement(message));
    saveMessageToLocalStorage(message);
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
};

loadMessagesFromLocalStorage();

form.addEventListener('submit', (e) => handleSubmit(e));
form.addEventListener('keypress', (e) => handleKeyPress(e));
sendButton.addEventListener('click', (e) => handleSubmit(e));
