import {createAPI} from '../../services/apiService';
import {type MessageApiType, type MessagesListApiType} from '../../types/messages';

interface IMessagesApi {
    getMessages(id: string): Promise<MessagesListApiType>;
    createNewMessage(messageText: string, chatId: string): Promise<MessageApiType>;
}

export class MessagesApi implements IMessagesApi {
    private api = createAPI();

    async getMessages(id: string): Promise<MessagesListApiType> {
        const {data} = await this.api.get(`/messages/?chat=${id}`);

        return data;
    }

    async createNewMessage(messageText: string, chatId: string): Promise<MessageApiType> {
        const {data} = await this.api.post('/messages/', {
            text: messageText,
            chat: chatId,
        });

        return data;
    }
}
