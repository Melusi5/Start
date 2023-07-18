import React from 'react'
import ReactDOM  from 'react-dom/client'

import Home from './Pages/Home'
import Photo from './Pages/Photo'
import Video from './Pages/Video'
import Login from './Pages/Login'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home/>,
  },
  {
    path: "/photo",
    element: <Photo/>,
  },
  {
    path: "/video",
    element: <Video/>,
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
