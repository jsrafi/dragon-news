import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import CategoryNews from './Components/CategoryNews/CategoryNews';
import AuthLayout from './Layouts/AuthLayout';
import Login from './Components/AuthComponents/Login';
import Register from './Components/AuthComponents/Register';
import AuthProvider from './provider/AuthProvider';
import NewsDetails from './Layouts/NewsDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01"></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news/:id",
    element: (<PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>),
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
