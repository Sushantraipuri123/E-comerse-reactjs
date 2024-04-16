import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home';
import About from './components/Home';
import Contact from './components/Home';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';


const router = createBrowserRouter([
  {},
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  }, 
   {
    path: '/contact',
    element: <Contact/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
