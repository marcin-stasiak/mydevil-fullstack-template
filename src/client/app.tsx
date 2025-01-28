import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { Layout } from './layout';
import { HomePage } from './pages/home.page';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({ cssVariables: { cssVarPrefix: '' } });

export const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
