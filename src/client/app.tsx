import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './layout';
import { HomePage } from './pages/home.page';
import { ThemeProvider } from '@mui/material';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import { theme } from './common/theme';

const queryClient = new QueryClient();
ClassNameGenerator.configure((componentName) => componentName.replace('Mui', '').toLowerCase());

export const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </QueryClientProvider>
);
