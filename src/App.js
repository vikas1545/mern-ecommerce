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
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected><Home/></Protected>),
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
    path: '/orders',
    element: (<UserOrdersPage/>),
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
        dispatch(fetchItemsByUserIdAsync(user.id))
      }
    },[dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
