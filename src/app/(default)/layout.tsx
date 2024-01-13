import React, { ReactNode } from 'react';
import LoginBar from '@/app/(default)/login-bar';

export default function DefaultLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50-500 dark:bg-gray-800">
        <main className="grow">
          {children}
        </main>
      </div>
    </>
  );
}
