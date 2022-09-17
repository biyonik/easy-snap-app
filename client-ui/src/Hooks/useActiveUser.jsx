import {useAuthContext} from "../Contexts/auth.context";
import {decodeToken} from "react-jwt";
import {useEffect, useMemo, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {ACTIVE_USER_QUERY} from "../Queries/User/user.query";
import {useApolloClient} from "react-apollo";

export const useActiveUser = () => {
    const {activeUser, setActiveUser} = useAuthContext();
    const [userId, setUserId] = useState(null);
    const client = useApolloClient();

    useEffect(() => {
        async function executeQuery(id) {
            const {loading, error, data} = await client.query({
                query: ACTIVE_USER_QUERY,
                variables: {id}
            });
            if (loading || error) return null;
            return data;
        }

        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = decodeToken(token);
            const {id} = decodedToken;
            executeQuery(id).then((d) => {

                setActiveUser(d?.activeUser);
            });

        }
    }, []);
    return activeUser;
}
