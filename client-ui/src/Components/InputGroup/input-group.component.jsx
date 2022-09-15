import {memo} from "react";

const InputGroupComponent = (props) => {
    return (
        <label>
            <input {...props} />
        </label>
    )
}

export default memo(InputGroupComponent);