import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BubblePage from "./pages/Home/BubblePage";
import Trending from './pages/Trending';
import Notification from "./pages/Notification";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Colors from './pages/Colors';
import Login from './pages/Login/SignIn'
import Register from "./pages/Login/SignUp";
import Forgot from "./pages/Login/Forgot";
import Sent from "./pages/Login/Sent";
import Unfound from "./pages/Login/Unfound";
import Status from './components/Status';
import NewPost from './pages/NewPost';
import EditProfile from "./components/pagesConfig/EditProfile";
import ThemeSettings from "./components/pagesConfig/ThemeSettings";
import PasswordSecurity from "./components/pagesConfig/PasswordSecurity";
import DeleteAccount from "./components/pagesConfig/DeleteAccount";

function AppRoutes() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
                <Route path="/colors" element={<Colors />}></Route>
                <Route path="/notifications" element={<Notification />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/bubble/:id" element={<BubblePage />}></Route>
                <Route path="/profile/:userId" element={<Profile />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login/forgot" element={<Forgot />}></Route>
                <Route path="/login/forgot/sent-email" element={<Sent />}></Route>
                <Route path="/login/forgot/unfound" element={<Unfound />}></Route>
                <Route path="/settings/" element={<Settings />}>
                    <Route index element={<EditProfile />} />
                    <Route path="editprofile" element={<EditProfile />} />
                    <Route path="persoprofile" element={<ThemeSettings />} />
                    <Route path="security" element={<PasswordSecurity />} />
                    <Route path="deleteprofile" element={<DeleteAccount />} />
                </Route>
                <Route path="/status" element={<Status/>}></Route>
                <Route path="/newpost" element={<NewPost/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;