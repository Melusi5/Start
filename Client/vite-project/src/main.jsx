import React from 'react'
import ReactDOM  from 'react-dom/client'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Login from './Pages/Login'

import {
    createBrowserRouter,
    RouterProvider,
}   from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
