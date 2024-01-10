import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
import ErrorPage from './pages/Error';
import Home from './pages/Home';

//Component reference: https://react-bootstrap.netlify.app/docs/components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ping",
    element: <body>Pong!</body>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }
]);


function App() {
  return (
    <div className="App" id="main-page">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
