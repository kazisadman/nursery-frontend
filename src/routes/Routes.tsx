import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/shop',
            element:<Product></Product>
        }
    ]
  },
]);

export default router;
