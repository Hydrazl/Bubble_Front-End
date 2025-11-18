import { createContext, useContext, useState } from "react";
import { getUser, isLogged } from "../lib/AuthHadler";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialLoggedState = isLogged();
    const initialUserState = initialLoggedState ? getUser() : null;

    const [logged, setLogged] = useState(initialLoggedState);
    const [user, setUser] = useState(initialUserState);

    return (
        <AuthContext.Provider value={{logged, user, setLogged, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);