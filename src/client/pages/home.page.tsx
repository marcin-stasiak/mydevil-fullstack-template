import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/client';

import { ENTRIES_QUERY } from '../common/graphql/entries.query';

export const HomePage = (): ReactElement => {
  const { loading, error, data } = useQuery(ENTRIES_QUERY, { fetchPolicy: 'cache-first' });

  return (
    <div>
      <br />
      <br />

      <h1>Hello, My Devils!</h1>
      {data?.entries.map((entry) => (
        <div key={entry.id}>
          <h2>{entry.title}</h2>
          <p>{entry.content}</p>
        </div>
      ))}
      <h2></h2>
    </div>
  );
};
