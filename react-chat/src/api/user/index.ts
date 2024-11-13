import {createAPI} from '../../services/apiService';
import {LocalStorageService} from '../../services/localStorageService';
import {type UserApiType} from '../../types/user';

interface IUserApi {
    getUser(): Promise<UserApiType>;
    getUsers(): Promise<UserApiType[]>;
    updateUser(id: string, userData: {bio: string, avatar: FormData}): Promise<UserApiType>;
}

export class UserApi implements IUserApi {
    private api = createAPI();
    private localStorageService = new LocalStorageService();

    public async getUser(): Promise<UserApiType> {
        const {data} = await this.api.get('/user/current/');

        this.localStorageService.setUserId(data.id);

        return data;
    }

    public async getUsers(): Promise<UserApiType[]> {
        const {data} = await this.api.get('/users/');

        return data.results;
    }

    public async updateUser(id: string, userData: {bio: string, avatar: FormData}): Promise<UserApiType> {
        const {data} = await this.api.patch(`/user/${id}/`, userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return data;
    }
}