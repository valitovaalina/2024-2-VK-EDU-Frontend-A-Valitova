import {createAPI} from '../../services/apiService';
import {type ChatApiType} from '../../types/chats';

interface IChatsApi {
    getChat(id: string): Promise<ChatApiType>;
    getChats(): Promise<ChatApiType[]>;
    createNewChat(memberId: string, title: string): void;
}

export class ChatsApi implements IChatsApi {
    private api = createAPI();

    public async getChat(id: string): Promise<ChatApiType> {
        const {data} = await this.api.get(`/chat/${id}`);

        return data;
    }

    public async getChats(): Promise<ChatApiType[]> {
        const {data} = await this.api.get('/chats/');

        return data.results;
    }

    public async createNewChat(memberId: string) {
        await this.api.post('/chats/', {
            'members': [memberId],
            'is_private': true,
            'title': 'title'
        });
    }
}