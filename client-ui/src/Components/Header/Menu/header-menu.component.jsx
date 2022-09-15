import {memo, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../../Contexts/auth.context";

const HeaderMenuComponent = () => {
    const {token, setToken} = useAuthContext();
    useEffect(() => {
        const t = localStorage.getItem('token');
        setToken(t);
    }, );


    const handleLogOut = () => {
        localStorage.removeItem('token');
        setToken('');

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
                <a onClick={handleLogOut}>Logout</a>
            )}
        </div>
    )
}

export default memo(HeaderMenuComponent);