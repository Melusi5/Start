import React from 'react'
import ReactDOM  from 'react-dom/client'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/Login'
import Login from './Pages/Login'

import {
    createBrowserRouter,
    RouterProvider,
}   from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Contact/>,
  },
  {
    path: "/",
    element: <About/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
