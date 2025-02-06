import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset) {
      id
      gender
      meta {
        slug
        title
        description
      }
    }
  }
`;
