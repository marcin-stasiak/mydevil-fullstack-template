import React, { ReactElement } from 'react';
import { Outlet } from 'react-router';

export const Layout = (): ReactElement => {
  return (
    <>
      <main className='flex-grow'>
        <Outlet />
      </main>
    </>
  );
};
