export const AppRoute = {
    Chats: '/',
    Chat: '/chat/:id',
    Profile: '/profile',
} as const;

export const AppApiRoute = {
    Root: '/',
    Login: '/login',
    Register: '/register',
    Chats: '/chats',
    Chat: '/chat',
    ChatWithChatId: '/chat/:chatId',
    Profile: '/profile',
}