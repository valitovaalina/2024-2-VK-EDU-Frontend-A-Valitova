import {createElement} from '../../helpers/createElement';
import './chat-page-footer.scss';

export const createChatPageFooter = () => {
    const footer = createElement('footer');
    const form = createElement('form', 'chat-page-form', '', {id: 'form'});
    const input = createElement('input', 'chat-page-form_input', '', {id: 'form_input', name: 'message-text', placeholder: 'Сообщение', type: 'text', autofocus: true});
    const button = createElement('button', 'chat-page-form_send-button', '', {id: 'form_send-button'});
    const icon = createElement('span', 'material-symbols-outlined', 'chevron_right');

    button.append(icon);
    form.append(input, button);
    footer.append(form);

    return {footer, form, button, input};
};
