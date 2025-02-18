import { Box } from '@mui/material';
import React, { FunctionComponent, PropsWithChildren } from 'react';

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
};
