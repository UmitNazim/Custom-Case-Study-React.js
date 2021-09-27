import { lazy } from 'react';

export default [
  {
    path: '/product',
    key: 'product',
    component: lazy(() => import('views/Catalog/ProductContent')),
  },
  {
    path: '/collection',
    key: 'collection',
    component: lazy(() => import('views/Catalog/CollectionContent')),
  },
  {
    path: '/product-family',
    key: 'productFamily',
    component: lazy(() => import('views/Catalog/ProductFamily')),
  },
];
