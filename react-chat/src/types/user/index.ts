export type User = {
    first_name: string;
    last_name: string;
    bio: string;
    avatar: string;
}

export type UserApiType = {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    bio?: string;
    avatar?: FormData;
}