import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Interests from './pages/Interests';

//Component reference: https://react-bootstrap.netlify.app/docs/components

function Layout() {
  return (
    <div className="App" id="main-page" data-bs-theme="dark">
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/",         element: <Home /> },
      { path: "/about",     element: <About /> },
      { path: "/projects",  element: <Projects /> },
      { path: "/interests", element: <Interests /> },
      { path: "/ping",      element: <p>Pong!</p> },
      { path: "*",          element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
