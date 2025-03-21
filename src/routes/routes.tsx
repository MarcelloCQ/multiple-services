import { createBrowserRouter } from "react-router";
import HomeFeature from "../features/home";
import ExcelConverterFeature from "../features/excel-converter";
import ResizeImgFeature from "../features/resize-img";
import routes from "./routes.json";

const router = createBrowserRouter([
  {
    path: routes[0].path,
    element: <HomeFeature />,
  },
  {
    path: routes[1].path,
    element: <ExcelConverterFeature />,
  },
  {
    path: routes[2].path,
    element: <ResizeImgFeature />,
  },
]);

export default router;
