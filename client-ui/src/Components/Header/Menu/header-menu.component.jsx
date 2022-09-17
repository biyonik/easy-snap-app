import {memo, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../../Contexts/auth.context";
import {useNavigate} from 'react-router-dom';

const HeaderMenuComponent = () => {
    const {token, setToken, setActiveUser} = useAuthContext();
    useEffect(() => {
        const t = localStorage.getItem('token');
        setToken(t);
    });
    const navigate = useNavigate();


    const handleLogOut = () => {
        localStorage.removeItem('token');
        setToken('');
        setActiveUser(null);
        navigate('login');
    }

    return (
        <div className="header_menu">
            <NavLink to="/" end>Home</NavLink>
            {!token && (
                <>
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="join">Join</NavLink>
                </>
            )}
            {token && (
                <>
                    <NavLink to="profile">Profile</NavLink>
                    <a onClick={handleLogOut}>Logout</a>
                </>
            )}
        </div>
    )
}

export default memo(HeaderMenuComponent);
