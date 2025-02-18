import React, { FunctionComponent, ReactElement } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Box } from '@mui/material';

export const DefaultLayout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
