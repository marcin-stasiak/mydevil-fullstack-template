import React, { FunctionComponent, ReactElement } from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

export const FullLayout: FunctionComponent = () => {
  return (
    <Box component='main' sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Outlet />
    </Box>
  );
};
