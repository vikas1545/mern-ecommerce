import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ProductList } from './features/product-list/ProductList';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';


import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route,Link} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignupPage/>),
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
