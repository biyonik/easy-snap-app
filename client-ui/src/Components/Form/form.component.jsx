import {memo} from "react";

const FormComponent = ({children}) => {
    return (
        <div>
            <form className="user-form">
                {children}
            </form>
        </div>
    )
}

export default memo(FormComponent);