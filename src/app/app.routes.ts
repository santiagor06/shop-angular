import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/pages/layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () => import('@info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('@products/pages/product-detail/product-detail.component'),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('@info/pages/not-found/not-found.component'),
  },
];
