import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Iconify } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const TemplatePage = lazy(() => import('@/pages/template'));


const template: AppRouteObject = {
  order: 3,
  path: 'template',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: '模版',
    icon: <Iconify icon="solar:widget-5-bold-duotone" className="ant-menu-item-icon" size="24" />,
    key: '/template',
  },
  children: [
    {
      index: true,
      element: <Navigate to="template" replace />,
    },
    {
      path: 'view',
      element: <TemplatePage />,
      meta: { label: '面板', key: '/template/view' },
    },
  ],
};

export default template;
