import {HashRouter, Route, Routes} from 'react-router-dom';
import {ChatPage} from './pages/ChatPage';
import {ChatsPage} from './pages/ChatsPage';
import {AppApiRoute, AppRoute} from './consts/AppRoute';
import {ProfilePage} from './pages/ProfilePage';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={AppApiRoute.Login} element={<LoginPage />} />
                <Route path={AppApiRoute.Register} element={<RegisterPage />} />
                <Route path={AppApiRoute.Chats} element={<ChatsPage />} />
                <Route path={AppRoute.Chat} element={<ChatPage />} />
                <Route path={AppRoute.Profile} element={<ProfilePage />} />
            </Routes>
        </HashRouter>
    );
}
