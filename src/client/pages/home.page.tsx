import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/client';

import { ENTRIES_QUERY } from '../common/graphql/entries.query';
import { Box, Container, Typography } from '@mui/material';

export const HomePage = (): ReactElement => {
  const { loading, error, data } = useQuery(ENTRIES_QUERY, { fetchPolicy: 'cache-first' });

  return (
    <Container>
      <Box>
        <Typography variant='h1'>Hello, My Devils!</Typography>
        {data?.entries.map((entry) => (
          <div key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
          </div>
        ))}
      </Box>
    </Container>
  );
};
