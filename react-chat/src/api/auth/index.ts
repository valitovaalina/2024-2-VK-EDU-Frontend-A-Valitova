import {createAPI} from '../../services/apiService';
import {LocalStorageService} from '../../services/localStorageService';
import {type UserApiType} from '../../types/user';

interface IAuthApi {
    auth(userData: UserApiType): void;
    register(userData: UserApiType): void;
}

export class AuthApi implements IAuthApi {
    private api = createAPI();
    private localStorageService = new LocalStorageService();

    public async auth(userData: UserApiType) {
        const {data} = await this.api.post('/auth/', userData);

        this.localStorageService.setTokens(data.access, data.refresh);
    }

    public async register(userData: UserApiType): Promise<any> {
        await this.api.post('/register/', userData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}