import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/ui/auth/Login';
import Signup from './components/ui/auth/Signup';
import Home from './components/ui/Home';

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

]);

function app() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );

}

export default app; 