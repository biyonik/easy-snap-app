import {memo} from "react";

const HomeDescriptionComponent = ({children}) => {
    return (
        <div className="description">
            <p className="sub_header__desc">
                {children}
            </p>
        </div>
    )
};

export default memo(HomeDescriptionComponent);
