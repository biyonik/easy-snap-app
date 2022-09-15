import {memo} from "react";

const LogoComponent = () => {
    return (
        <div className="logo">
            <h2 className="logo__title">easysnap</h2>
        </div>
    )
}

export default memo(LogoComponent);