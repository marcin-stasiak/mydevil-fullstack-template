import { gql } from '@apollo/client';

export const SETTING_QUERY = gql`
  query ($name: String!) {
    setting(name: $name) {
      name
      value
    }
  }
`;
