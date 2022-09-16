import {useEffect, useState} from "react";
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const useConfigClient = () => {
    const [authTokenStorage, setAuthTokenStorage] = useState(localStorage.getItem('token'));

    const client = new ApolloClient({
        uri: 'http://127.0.0.1:4000/graphql',
        cache: new InMemoryCache(),
        fetchOptions: {
            credentials: 'include'
        },
        headers: {
            authorization: authTokenStorage
        }
    })

    useEffect(() => {
        setAuthTokenStorage(localStorage.getItem('token'));
    }, []);

    return client;
}