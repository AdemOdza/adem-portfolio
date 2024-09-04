import React, { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import ReactDOM from 'react-dom';

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
    path: "/experience",
    element: <body>
      Experience page to go here
      <p id="repairify"> repairify </p>
      <p id="astech"> astech </p>
      </body>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }
]);


function App() {
  const [isEnglish, setEnglish] = useState(true);
  const toggleLanguage = () => {
    setEnglish(!isEnglish)
  }

  //Header
  //Toolbar
  //Body 
  return (
    <div>
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <React.StrictMode>
        <RouterProvider router={router}/> 
      </React.StrictMode>
    </div>
  );
}

export default App;
