interface ILocalStorageService {
    getUserId(): string;
    getAccessToken(): string;
    getRefreshToken(): string;
    removeTokens(): void;
    setTokens(accessToken: string, refreshToken: string): void;
    setUserId(id: string): void;
}

export class LocalStorageService implements ILocalStorageService {
    public getAccessToken(): string {
        const token = localStorage.getItem('access_token');

        return token ? token : '';
    }

    public getRefreshToken(): string {
        const token = localStorage.getItem('refresh_token');

        return token ? token : '';
    }

    public getUserId(): string {
        const userId = localStorage.getItem('user_id');

        return userId ? userId : '';
    }

    public removeTokens(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    public setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    }

    public setUserId(id: string): void {
        localStorage.setItem('user_id', id);
    }

}