import {memo, useState} from "react";
import FormComponent from "../../Components/Form/form.component";
import InputGroupComponent from "../../Components/InputGroup/input-group.component";
import ButtonGroupComponent from "../../Components/ButtonGroup/button-group.component";
import {CREATE_USER_MUTATION} from "../../Mutations/User/user.mutation";
import {useMutation} from "react-apollo";
import ErrorComponent from "../../Components/Error/error.component";
import LoadingComponent from "../../Components/Loading/loading.component";

const JoinPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [createUser, {loading, error}] = useMutation(CREATE_USER_MUTATION, {
        variables: {
            username: username,
            password: password
        }
    });

    const isFormValidate = () => {
        const isInvalid = !username || !password || !passwordConfirm || password !== passwordConfirm;
        return isInvalid;
    }

    const clearAllFormFields = () => {
        setUsername('');
        setPassword('');
        setPasswordConfirm('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const {data: {createUser: {token}}} = await createUser();
        console.log(token);
        clearAllFormFields();
    }

    return (
        <FormComponent className="user-form" onSubmit={handleSubmit}>
            <InputGroupComponent
                type="text"
                name="username"
                required={true}
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="username"/>
            <InputGroupComponent
                type="password"
                name="password"
                autoComplete="off"
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"/>
            <InputGroupComponent
                type="password"
                name="passwordConfirm"
                autoComplete="off"
                required={true}
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                placeholder="confirm password"/>
            <ButtonGroupComponent
                disabled={loading || isFormValidate()}
                type="submit">
                    Join
            </ButtonGroupComponent>
            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent message={error.message} />)}
        </FormComponent>
    )
}

export default memo(JoinPage);