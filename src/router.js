import {
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Register from "./routes/register";
import RegistrationStat from "./routes/registrationstat";
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
  {
    path: "/registrationstat",
    element: <RegistrationStat/>,
  },
]);

export default router;