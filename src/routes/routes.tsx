import { createBrowserRouter } from 'react-router';
import React, { Suspense } from 'react';
import routes from './routes.json';

const HomeFeature = React.lazy(() => import('../features/home'));
const ExcelConverterFeature = React.lazy(
  () => import('../features/excel-converter')
);
const ResizeImgFeature = React.lazy(() => import('../features/resize-img'));
const ContactFormFeature = React.lazy(() => import('../features/contact-form'));
const Loader = React.lazy(() => import('../components/loader/Loader'));

const router = createBrowserRouter([
  {
    path: routes[0].path,
    element: (
      <Suspense fallback={<Loader />}>
        <HomeFeature />
      </Suspense>
    ),
  },
  {
    path: routes[1].path,
    element: (
      <Suspense fallback={<Loader />}>
        <ExcelConverterFeature />
      </Suspense>
    ),
  },
  {
    path: routes[2].path,
    element: (
      <Suspense fallback={<Loader />}>
        <ResizeImgFeature />
      </Suspense>
    ),
  },
  {
    path: routes[3].path,
    element: (
      <Suspense fallback={<Loader />}>
        <ContactFormFeature />
      </Suspense>
    ),
  },
]);

export default router;
