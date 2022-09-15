import {memo, useState, useEffect} from "react";
import FormComponent from "../../Components/Form/form.component";
import InputGroupComponent from "../../Components/InputGroup/input-group.component";
import ButtonGroupComponent from "../../Components/ButtonGroup/button-group.component";
import {SIGN_IN_MUTATION} from "../../Mutations/User/user.mutation";
import {useMutation} from "react-apollo";
import LoadingComponent from "../../Components/Loading/loading.component";
import ErrorComponent from "../../Components/Error/error.component";
import {useAuthContext} from "../../Contexts/auth.context";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [signIn, {loading, error}] = useMutation(SIGN_IN_MUTATION, {
        variables: {
            username,
            password
        }
    });
    const {setToken} = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        const isTokenExists = localStorage.getItem('token');
        if (isTokenExists) {
            setToken(isTokenExists);
            navigate('/');
        }
    }, []);

    const isFormValidate = () => {
        const isInvalid = !username || !password;
        return isInvalid;
    }


    const clearAllFormFields = () => {
        setUsername('');
        setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const {data: {signIn: {token}}} =await signIn();
        localStorage.setItem('token', token);
        setToken(token);
        navigate('/');
        clearAllFormFields();
    }
    return (
        <FormComponent onSubmit={handleSubmit} className="user-form">
            <InputGroupComponent
                value={username}
                type="text"
                required={true}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username" />
            <InputGroupComponent
                value={password}
                type="password"
                autoComplete="off"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
            <ButtonGroupComponent disabled={loading || isFormValidate()} type="submit">Login</ButtonGroupComponent>
            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent message={error.message} />)}
        </FormComponent>
    )
}

export default memo(LoginPage);