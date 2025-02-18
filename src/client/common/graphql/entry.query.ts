import { gql } from '@apollo/client';

export const ENTRY_QUERY = gql`
  query ($slug: String!) {
    entry(slug: $slug) {
      id
      title
      content
      type
      status
      #      author {
      #        id
      #      }
      meta {
        slug
        title
        description
      }
    }
  }
`;
