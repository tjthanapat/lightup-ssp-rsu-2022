import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Register from './routes/register';
import RegistrationStat from './routes/registrationstat';
import StudentLists from './routes/studentlists';
import StudentListsByClassroom from './routes/studentlists/classroom';
import StudentListsByBooth from './routes/studentlists/booth';
import StudentSearch from './routes/search';

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
  { path: '/studentlists', element: <StudentLists /> },
  {
    path: '/studentlists/classroom',
    element: <StudentListsByClassroom />,
  },
  {
    path: '/studentlists/booth',
    element: <StudentListsByBooth />,
  },
  {
    path: '/search',
    element: <StudentSearch />,
  },
]);

export default router;
