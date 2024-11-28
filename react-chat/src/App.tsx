import {HashRouter, Route, Routes} from 'react-router-dom';
import {ChatPage} from './pages/ChatPage';
import {ChatsPage} from './pages/ChatsPage';
import {AppApiRoute} from './consts/AppRoute';
import {ProfilePage} from './pages/ProfilePage';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';
import {PublicRoute} from './components/PublicRoute/PublicRoute';

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path={AppApiRoute.Login} element={<LoginPage />} />
                    <Route path={AppApiRoute.Register} element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route
                        path={AppApiRoute.Root}
                        element={<ChatsPage />}
                    />
                    <Route
                        path={AppApiRoute.Chats}
                        element={<ChatsPage />}
                    />
                    <Route
                        path={AppApiRoute.ChatWithChatId}
                        element={<ChatPage />}
                    />
                    <Route
                        path={AppApiRoute.Profile}
                        element={<ProfilePage />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}
