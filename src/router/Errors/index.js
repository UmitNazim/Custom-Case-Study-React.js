import { lazy } from 'react';

export default [
  {
    key: 'error',
    path: '*',
    component: lazy(() => import('views/Errors')),
  },
];
