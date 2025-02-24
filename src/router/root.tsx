import { createBrowserRouter, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import AdminLayout from '../layouts/AdminLayout';
import OrdersPage from '../pages/OrdersPage';
import { useAuth } from '../components/context/AuthProvider';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route Component (for already authenticated users)
const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <OrdersPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <PublicLayout />
      </PublicRoute>
    ),
    children: [
      { index: true, element: <LoginPage /> },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
]);