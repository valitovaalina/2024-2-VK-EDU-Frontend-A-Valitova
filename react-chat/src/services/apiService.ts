import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {LocalStorageService} from './localStorageService';

const BACKEND_URL = 'https://vkedu-fullstack-div2.ru/api/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
    });
    const localStorageService = new LocalStorageService();

    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig ) => {
            const accessToken = localStorageService.getAccessToken();

            if (config.url !== '/register/' && accessToken && config.headers) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            return config;
        },
    );

    api.interceptors.response.use(
        (response) => response,
        async (error: AxiosError) => {
            const errorConfig = error.config;
            const errorResponse = error.response;

            if (errorResponse && errorConfig && errorConfig?.url !== '/auth/refresh/' && errorConfig?.url !== '/register/') {
                if (errorResponse.status === 401 && errorConfig.fetchOptions && !errorConfig.fetchOptions._retry) {
                    errorConfig.fetchOptions._retry = true;
                    const token = localStorageService.getRefreshToken();

                    if (token) {
                        const response = await api.post('/auth/refresh/', {refresh: token});

                        localStorageService.setTokens(response.data.access, response.data.refresh);

                        return api(errorConfig);
                    }
                }
            }

            throw error;
        });

    return api;
};
