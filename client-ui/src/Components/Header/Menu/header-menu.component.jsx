import {memo} from "react";
import {Link, NavLink} from "react-router-dom";

const HeaderMenuComponent = () => {
    return (
        <div className="header_menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="join">Join</NavLink>
        </div>
    )
}

export default memo(HeaderMenuComponent);