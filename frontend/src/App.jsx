import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/ui/auth/Login';
import Signup from './components/ui/auth/Signup';
import Home from './components/ui/Home';
import Jobs from './components/ui/Jobs';
import Browse from './components/ui/Browse';
import Profile from './components/ui/Profile';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path : '/jobs',
    element : <Jobs/>
  },
  {
    path : '/browse',
    element : <Browse/>
  },
  {
    path : '/profile',
    element : <Profile/>
  },

]);

function app() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );

}

export default app; 