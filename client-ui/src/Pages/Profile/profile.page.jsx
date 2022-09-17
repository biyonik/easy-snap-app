import {memo, useEffect} from "react";
import {useAuthContext} from "../../Contexts/auth.context";
import {useNavigate} from "react-router-dom";
import {useActiveUser} from "../../Hooks/useActiveUser";
import moment from "moment";


const ProfilePage = () => {
    const {token, setToken} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const isTokenExists = localStorage.getItem('token');
        if (!isTokenExists) {
            setToken('');
            navigate('/login');
        }
    }, []);
    const activeUser = useActiveUser();

    return (
        <>
            <h3>Hoşgeldiniz {activeUser?.username}</h3>
            <h4>Üyelik Tarihi: {moment(activeUser?.createdAt).format('DD/MM/yyyy')}</h4>
            <p>Burası sizin profil sayfanız</p>
        </>
    )
}

export default memo(ProfilePage);
