import { createContext, useContext, useState } from "react";
import { getUser, isLogged } from "../lib/AuthHandler";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialLogged = isLogged();
    const initialUser = initialLogged ? getUser() : null;

    const [logged, setLogged] = useState(initialLogged);
    const [user, setUser] = useState(initialUser);

    return (
        <AuthContext.Provider value={{ logged, user, setLogged, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);