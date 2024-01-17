'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const LoginBar = () => {
  const { user } = useUser();

  return (
    <div className="noprint flex justify-end">
      {user ? (
        <a href="/admin">
          Go to dashboard
        </a>
      ) : (
        <a href="/api/auth/login">
          Login
        </a>
      )}
    </div>
  );
};

export default LoginBar;
