import {gql} from "@apollo/client";

export const ADD_SNAP_MUTATION = gql `
    mutation createSnap($text: String!, $userId: ID!) {
        createSnap(data: {
            text: $text,
            userId: $userId
        }) {
            text,
            createdAt,
            user {
                id,
                username
            }
        }
    }
`;
