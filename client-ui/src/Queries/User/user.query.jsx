import {gql} from "@apollo/client";

export const ACTIVE_USER_QUERY = gql `
    query getActiveUser($id: ID!) {
        activeUser(id:$id) {
            username,
            createdAt
        }
    }
`;
