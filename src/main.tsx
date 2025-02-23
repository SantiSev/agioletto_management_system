import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router/root.tsx';
import { AuthProvider } from './components/context/AuthProvider.tsx';

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_id}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
