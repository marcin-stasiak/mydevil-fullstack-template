import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/default.layout';
import { HomePage } from './pages/home.page';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import { theme } from './common/theme';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { ArticlePage } from './pages/article.page';
import { AdminLayout } from './layouts/admin.layout';
import { FullLayout } from './layouts/full.layout';
import { adminPath, isClientRenderMode } from './common/utilities';
import { AdminPage } from './pages/admin/admin.page';
import { PostPage } from './pages/post.page';
import { ContactPage } from './pages/contact.page';
import { ErrorPage } from './pages/error.page';

ClassNameGenerator.configure((componentName) => componentName.replace('Mui', '').toLowerCase());

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route element={<AdminLayout />}>
        {isClientRenderMode && <Route path={adminPath} element={<AdminPage />} />}
      </Route>

      <Route element={<FullLayout />}>
        <Route path='login' element={isClientRenderMode ? <LoginPage /> : null} />
        <Route path='register' element={isClientRenderMode ? <RegisterPage /> : null} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path='' element={<HomePage />} />
        <Route path=':slug' element={<PostPage />} />
        <Route path=':slug' element={<ArticlePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
