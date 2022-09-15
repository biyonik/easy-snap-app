import {memo} from "react";
import FormComponent from "../../Components/Form/form.component";
import InputGroupComponent from "../../Components/InputGroup/input-group.component";
import ButtonGroupComponent from "../../Components/ButtonGroup/button-group.component";

const JoinPage = () => {
    return (
        <FormComponent>
            <InputGroupComponent type="text" placeholder="username"/>
            <InputGroupComponent type="password" placeholder="password"/>
            <InputGroupComponent type="password" placeholder="confirm password"/>
            <ButtonGroupComponent>Join</ButtonGroupComponent>
        </FormComponent>
    )
}

export default memo(JoinPage);