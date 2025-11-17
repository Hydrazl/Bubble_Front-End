import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Trending from './pages/Trending';
import Explorer from './pages/Explorer';
import Chat from './pages/Chat';
import Notification from "./pages/Notification";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Colors from './pages/Colors';
import Register from "./pages/Login/SignUp";
import Forgot from "./pages/Login/Forgot";
import Sent from "./pages/Login/Sent";
import Unfound from "./pages/Login/Unfound";
import Status from './components/Status';
import NewRegister from "./pages/Login/NewSignUp";

function AppRoutes() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
                <Route path="/colors" element={<Colors />}></Route>
                <Route path="/explorer" element={<Explorer />}></Route>
                <Route path="/bulhufas" element={<Chat />}></Route>
                <Route path="/notifications" element={<Notification />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login/forgot" element={<Forgot />}></Route>
                <Route path="/login/forgot/sent-email" element={<Sent />}></Route>
                <Route path="/login/forgot/unfound" element={<Unfound />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/status" element={<Status/>}></Route>
                <Route path="/newregister" element={<NewRegister/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes