import {gql} from "@apollo/client";

export const GET_SNAPS = gql `
    query {
        snaps {
            text
            createdAt
            user {
                id
                username
            }
        }
    }
`;
