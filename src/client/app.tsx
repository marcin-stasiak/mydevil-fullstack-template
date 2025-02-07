import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './layout';
import { HomePage } from './pages/home.page';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import { theme } from './common/theme';

ClassNameGenerator.configure((componentName) => componentName.replace('Mui', '').toLowerCase());

export const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
