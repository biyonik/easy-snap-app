import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{token, setToken}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);