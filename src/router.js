import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Register from './routes/register';
import RegistrationStat from './routes/registrationstat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/registrationstat',
    element: <RegistrationStat />,
  },
]);

export default router;
