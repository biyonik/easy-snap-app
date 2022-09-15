import {memo} from "react";

const ButtonGroupComponent = ({children}, props) => {
    return (
        <label>
            <button {...props}>
                {children}
            </button>
        </label>
    )
}

export default memo(ButtonGroupComponent);