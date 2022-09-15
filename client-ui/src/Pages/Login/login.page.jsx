import {memo} from "react";
import FormComponent from "../../Components/Form/form.component";
import InputGroupComponent from "../../Components/InputGroup/input-group.component";
import ButtonGroupComponent from "../../Components/ButtonGroup/button-group.component";

const LoginPage = () => {
    return (
        <FormComponent>
            <InputGroupComponent type="text" placeholder="username" />
            <InputGroupComponent type="password" placeholder="password" />
            <ButtonGroupComponent>Login</ButtonGroupComponent>
        </FormComponent>
    )
}

export default memo(LoginPage);