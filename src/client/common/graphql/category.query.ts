import { gql } from '@apollo/client';

export const CATEGORY_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
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
