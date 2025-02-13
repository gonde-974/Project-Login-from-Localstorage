import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AuthGuarding from './utils/AuthGuarding.jsx';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Почетна страна "/"
        element: <HomePage />,
      },
      {
        path: 'products',
        element: (
          <AuthGuarding>
            <ProductsPage />
          </AuthGuarding>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
