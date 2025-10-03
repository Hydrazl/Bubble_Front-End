import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Trending from './pages/Trending';
import Explorer from './pages/Explorer';
import Chat from './pages/Chat';
import Notification from "./pages/Notification";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Status from './components/Status';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
                <Route path="/explorer" element={<Explorer />}></Route>
                <Route path="/bulhufas" element={<Chat />}></Route>
                <Route path="/notifications" element={<Notification />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/status" element={<Status/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes