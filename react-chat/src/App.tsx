import {HashRouter, Route, Routes} from 'react-router-dom';
import {ChatPage} from './pages/ChatPage';
import {ChatsPage} from './pages/ChatsPage';
import {AppRoute} from './consts/AppRoute';

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={AppRoute.Chats} element={<ChatsPage />} />
                <Route path={AppRoute.Chat} element={<ChatPage />} />
                {/*<Route path={AppRoute.Profile} Component={ProfilePage}/>*/}
            </Routes>
        </HashRouter>
    );
}
