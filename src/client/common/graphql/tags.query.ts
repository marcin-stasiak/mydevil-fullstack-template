import { gql } from '@apollo/client';

export const TAGS_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    tags(limit: $limit, offset: $offset) {
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
