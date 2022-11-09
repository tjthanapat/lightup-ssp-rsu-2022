import {
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Register from "./routes/register";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

export default router;