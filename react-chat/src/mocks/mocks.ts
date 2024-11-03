import type {User} from '../types/user/index';
import type {Chat} from '../types/chats/index';

export const chatsMocks: Chat[] = [
    {
        id: '1',
        name: 'Оля',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'kkkkkkkkkkkkkkkkk', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: false,
    },
    {
        id: '2',
        name: 'Дима',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'cccccccccccccccc', date: new Date('2024-04-21T22:15:45-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '3',
        name: 'Ваня',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'aaaaaaaaaaaaaaaaaa', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: false,
    },
    {
        id: '4',
        name: 'Лиза',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'aaaaaaaaaaaaaaaaaa', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '5',
        name: 'Катя',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'aaaaaaaaaaaaaaaaaa', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: false,
    },
    {
        id: '6',
        name: 'Арина',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'cccccccccccccccc', date: new Date('2024-04-21T22:15:45-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '7',
        name: 'Максим',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'aaaaaaaaaaaaaaaaaa', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: false,
    },
    {
        id: '8',
        name: 'Вова',
        avatar: './images/avatar_1.jpg',
        messages: [
            {id: '1', text: 'aaaaaaaaaaaaaaaaaa', date: new Date('2024-09-21T22:13:10-04:12')},
            {id: '2', text: 'bbbbbbbbbbbbbbbbbb', date: new Date('2024-10-21T22:14:30-04:12')},
            {id: '3', text: 'cccccccccccccccc', date: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: true,
    }
];

export const userMock: User = {
    first_name: 'Алина',
    last_name: 'Валитова',
    bio: 'lalalalalalaallalalalalala',
    avatar: './images/avatar_1.jpg',
}