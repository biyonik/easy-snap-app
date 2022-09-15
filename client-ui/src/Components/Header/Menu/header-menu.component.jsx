import {memo} from "react";
import {Link} from "react-router-dom";

const HeaderMenuComponent = () => {
    return (
        <div className="header_menu">
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="join">Join</Link>
        </div>
    )
}

export default memo(HeaderMenuComponent);