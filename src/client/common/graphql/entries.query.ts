import { gql } from '@apollo/client';

export const ENTRIES_QUERY = gql`
  query ($type: EntryType, $limit: Int, $offset: Int) {
    entries(type: $type, limit: $limit, offset: $offset) {
      id
      title
      content
      type
      status
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
