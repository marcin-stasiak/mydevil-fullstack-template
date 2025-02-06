import { gql } from '@apollo/client';

export const TAG_QUERY = gql`
  query ($slug: String!) {
    tag(slug: $slug) {
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
