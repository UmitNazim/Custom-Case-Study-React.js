import { lazy } from 'react';

export default [
  {
    path: '/login',
    key: 'login',
    component: lazy(() => import('views/Authentication/LoginContent')),
  },
  {
    path: '/forgot-password',
    key: 'forgotPassword',
    component: lazy(() => import('views/Authentication/ForgotPassword')),
  },
  {
    path: '/register',
    key: 'register',
    component: lazy(() => import('views/Authentication/RegisterContent')),
  },
];
