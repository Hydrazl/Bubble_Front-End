import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Trending from './pages/Trending';
import Explorer from './pages/Explorer';
import Chat from './pages/Chat';
import Notification from "./pages/Notification";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from "./pages/Login/SignIn";
import Register from "./pages/Login/SignUp";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
                <Route path="/explorer" element={<Explorer />}></Route>
                <Route path="/chat" element={<Chat />}></Route>
                <Route path="/notifications" element={<Notification />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes