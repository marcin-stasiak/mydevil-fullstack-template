import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { Layout } from './layout';
import { HomePage } from './pages/home.page';

export const App = (): ReactElement => (
  <Routes>
    <Route element={<Layout/>}>
      <Route path='/' element={<HomePage />} />
    </Route>
  </Routes>
);
