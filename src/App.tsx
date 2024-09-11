import React, { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import { ContactPage } from './pages/Contact';
import { Box, Modal, Typography } from '@mui/material';

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
      TODO: Finish
      resume garbage: this is where i have worked
      <p id="repairify"> repairify </p>
      <p id="astech"> astech </p>
      </body>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }
]);


function App() {
  const [isEnglish, setEnglish] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleLanguage = () => {
    setEnglish(!isEnglish)
    handleOpen()
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  //Header
  //Toolbar
  //Body 
  return (
    <div>
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This isn&apos;t finished yet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This switch should switch the website&apos;s language between English and Shqip. <br/> <br/>
            Click outside the box to exit
          </Typography>
        </Box>
      </Modal>

      <React.StrictMode>
        <RouterProvider router={router}/> 
      </React.StrictMode>
    </div>
  );
}

export default App;
