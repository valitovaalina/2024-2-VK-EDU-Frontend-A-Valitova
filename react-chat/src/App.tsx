import {HashRouter, Route, Routes} from 'react-router-dom';
import {ChatPage} from './pages/ChatPage';
import {ChatsPage} from './pages/ChatsPage';
import {AppApiRoute, AppRoute} from './consts/AppRoute';
import {ProfilePage} from './pages/ProfilePage';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={AppApiRoute.Root} element={<LoginPage />} />
                <Route path={AppApiRoute.Login} element={<LoginPage />} />
                <Route path={AppApiRoute.Register} element={<RegisterPage />} />
                <Route
                    path={AppApiRoute.Chats}
                    element={
                        <PrivateRoute>
                            <ChatsPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppApiRoute.ChatWithChatId}
                    element={
                        <PrivateRoute>
                            <ChatPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppRoute.Profile}
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </HashRouter>
    );
}
