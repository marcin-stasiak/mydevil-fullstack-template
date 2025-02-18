import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';

import { ENTRIES_QUERY } from '../common/graphql/entries.query';
import { Box, Container, Typography } from '@mui/material';

export const HomePage: FunctionComponent = () => {
  const { loading, error, data } = useQuery(ENTRIES_QUERY, {
    variables: {
      type: 'POST',
    },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <Container>
      <Box>
        {data?.entries.map((entry, index: number) => (
          <Box key={entry.id}>
            <Typography variant='h2'>{entry.title}</Typography>
            <Typography variant='body1'>{entry.content}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
