import { gql } from '@apollo/client';

export const SETTINGS_QUERY = gql`
  query {
    settings {
      name
      value
    }
  }
`;
