import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import AdminLayout from '../layouts/AdminLayout';
import EmployeePage from '../pages/OrdersPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '/employees',
    element: <AdminLayout />,
    children: [{ index: true, element: <EmployeePage /> }],
  },
]);
