export type User = {
    first_name: string;
    last_name: string;
    bio: string;
    avatar: string;
}

export type AuthUserApiType = {
    username: string;
    password: string;
}

export type RegisterUserApiType = {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    bio?: string;
    avatar?: string;
}

export type UserApiType = {
    id: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    bio?: string;
    avatar?: string;
}