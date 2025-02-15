import { gql } from '@apollo/client';

export const ENTRIES_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    entries(limit: $limit, offset: $offset) {
      id
      title
      content
      #        author {
      #            id
      #        }
      meta {
        slug
        title
        description
      }
    }
  }
`;
