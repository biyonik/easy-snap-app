import {gql} from "apollo-boost";

export const CREATE_USER_MUTATION = gql`
    mutation($username:String!, $password:String!) {
        createUser(data: {
            username: $username
            password: $password
        }) {
            token
        }
    }
`;

export const SIGN_IN_MUTATION = gql `
    mutation($username:String!, $password:String!) {
        signIn(data: {
            username: $username
            password: $password
        }) {
            token
        }
    }
`;