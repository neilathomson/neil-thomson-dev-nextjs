'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import TopBar from '@/app/admin/topbar';
import { useUser } from '@auth0/nextjs-auth0/client';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { user } = useUser();

  return (
    <NextUIProvider>
      <TopBar/>
      {user && (
        <>
          { children }
        </>
      )}
    </NextUIProvider>
  );
};

export default Layout;
