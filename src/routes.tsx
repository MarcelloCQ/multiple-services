import { createBrowserRouter } from 'react-router';
import HomeFeature from './features/home';
import ExcelConverterFeature from './features/excel-converter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeFeature />,
  },
  {
    path: '/excel-converter',
    element: <ExcelConverterFeature />,
  },
]);

export default router;
