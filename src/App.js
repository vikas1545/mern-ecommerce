import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ProductList } from './features/product/components/ProductList';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route,Link} from "react-router-dom";
import { Cart } from './features/cart/Cart';
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetailPage from './features/pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageNotFound from './features/pages/404';
import OrderSuccessPage from './features/pages/OrderSuccessPage'
import UserOrdersPage from './features/pages/UserOrdersPage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './features/pages/UserProfilePage';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './features/pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';

import AdminHome from './features/pages/AdminHome';
import AdminProductDetailPage from './features/pages/AdminProductDetailPage';
import AdminProductFormPage from './features/pages/AdminProductFormPage';
import AdminOrdersPage from './features/pages/AdminOrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected><Home/></Protected>),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignupPage/>),
  },
  {
    path: "/cart",
    element: (<Protected><CartPage/></Protected>),
  },
  { 
    path: '/checkout',
    element: (<Protected><Checkout/></Protected>),
  },
  { 
    path: '/product-detail/:id',
    element: (<Protected><ProductDetailPage/></Protected>),
  },
  { 
    path: '/order-success/:id',
    element: (<OrderSuccessPage/>),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage> 
      </ProtectedAdmin>
    ),
  },
  { 
    path: '/orders',
    element: (<UserOrdersPage/>),
  },
  { 
    path: '/profile',
    element: (<UserProfilePage/>),
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  { 
    path: '*',
    element: <PageNotFound/>,
  }
  
]);




function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  
   useEffect(()=>{
      if(user) {
        dispatch(fetchItemsByUserIdAsync())
        dispatch(fetchLoggedInUserAsync())
      }
    },[dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
