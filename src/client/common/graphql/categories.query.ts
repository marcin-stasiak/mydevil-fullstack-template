import { gql } from '@apollo/client';

export const CATEGORIES_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    categories(limit: $limit, offset: $offset) {
      id
      title
      meta {
        slug
        title
        description
      }
    }
  }
`;
