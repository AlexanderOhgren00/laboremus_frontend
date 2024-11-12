import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './home/Home.jsx'
import Admin from './admin/Admin.jsx'
import Login from './login/Login.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: "/login", element: <Login /> },
  {
    path: "/admin", element: <Admin />, children: [
      {
        path: "/admin/edit/:id", element: <Admin />, children: [
          { path: "/admin/edit/:id", element: <Event /> }
        ]
      },
      {
        path: "/admin/create", element: <Admin />, children: [
          { path: "admin/create", element: <Event /> }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);