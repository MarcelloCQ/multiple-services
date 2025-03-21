import { createBrowserRouter } from "react-router";
import HomeFeature from "../features/home";
import ExcelConverterFeature from "../features/excel-converter";
import ResizeImgFeature from "../features/resize-img";
import routes from "./routes.json";
import ContactFormFeature from "../features/contact-form";

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
  {
    path: routes[3].path,
    element: <ContactFormFeature />,
  },
]);

export default router;
