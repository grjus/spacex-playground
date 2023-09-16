import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header/index.tsx';
import { router } from './routes/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
