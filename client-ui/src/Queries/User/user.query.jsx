import {gql} from "@apollo/client";

export const ACTIVE_USER_QUERY = gql `
    query {
        activeUser {
            username
        }
    }
`;