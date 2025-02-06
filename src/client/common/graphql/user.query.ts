import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query ($slug: String!) {
    user(slug: $slug) {
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
