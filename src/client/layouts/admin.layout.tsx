import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

export const AdminLayout: FunctionComponent = () => {
  return (
    <>
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};
