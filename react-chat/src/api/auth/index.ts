import {createAPI} from '../../services/apiService';
import {LocalStorageService} from '../../services/localStorageService';
import {type LoginType} from '../../types/auth';
import {type AuthUserApiType, type UserApiType} from '../../types/user';

interface IAuthApi {
    auth(userData: UserApiType): Promise<LoginType>;
    register(userData: UserApiType): Promise<UserApiType>;
}

export class AuthApi implements IAuthApi {
    private api = createAPI();
    private localStorageService = new LocalStorageService();

    public async auth(userData: AuthUserApiType) {
        const {data} = await this.api.post('/auth/', userData);

        this.localStorageService.setTokens(data.access, data.refresh);
        
        return data;
    }

    public async register(userData: UserApiType): Promise<UserApiType> {
        const {data} = await this.api.post('/register/', userData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        return data;
    }
}