import {memo} from "react";

const FormComponent = (props) => {
    const {children} = props;
    return (
        <div>
            <form {...props}>
                {children}
            </form>
        </div>
    )
}

export default memo(FormComponent);