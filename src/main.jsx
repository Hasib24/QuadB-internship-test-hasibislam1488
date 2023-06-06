import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ContextProvider from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </ContextProvider>
)
