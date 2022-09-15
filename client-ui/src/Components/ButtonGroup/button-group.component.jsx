import {memo} from "react";

const ButtonGroupComponent = (props) => {
    const {children} = props;
    return (
        <label>
            <button {...props}>
                {children}
            </button>
        </label>
    )
}

export default memo(ButtonGroupComponent);