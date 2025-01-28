import React, { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const Layout = (): ReactElement => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
