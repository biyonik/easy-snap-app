import {createContext, useContext, useState} from "react";

const initialValues = {
    token: '',
    setToken: () => {},
    activeUser: null,
    setActiveUser: () => {},
};
const AuthContext = createContext(initialValues);

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [activeUser, setActiveUser] = useState(null);
    const value = {
        token,
        setToken,
        activeUser,
        setActiveUser
    };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
