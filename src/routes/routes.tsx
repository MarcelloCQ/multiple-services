import { createBrowserRouter } from 'react-router';
import HomeFeature from '../features/home';
import ExcelConverterFeature from '../features/excel-converter';
import ResizeImgFeature from '../features/resize-img';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeFeature />,
  },
  {
    path: '/excel-converter',
    element: <ExcelConverterFeature />,
  },
  {
    path: '/resize-img',
    element: <ResizeImgFeature />,
  },
]);

export default router;
