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

export type UpdateUserApiType = {
    first_name: string;
    last_name: string;
    bio: string
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