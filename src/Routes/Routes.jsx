import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../Layouts/MainLayout';
import ErrorPages from '../pages/ErrorPages';
import Installation from '../pages/Installation';
import Apps from '../pages/Apps';
import AppDetails from '../pages/AppDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPages></ErrorPages>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
        // loader: () => fetch('appsData.json'),
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/app/:id',
        Component: AppDetails,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      
    ],
  },
]);
