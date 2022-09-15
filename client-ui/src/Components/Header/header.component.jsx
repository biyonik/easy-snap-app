import {memo} from "react";
import LogoComponent from "../Logo/logo.component";
import HeaderMenuComponent from "./Menu/header-menu.component";

const HeaderComponent = () => {
    return (
        <div className="header">
            <LogoComponent />
            <HeaderMenuComponent />
        </div>
    )
}

export default memo(HeaderComponent);