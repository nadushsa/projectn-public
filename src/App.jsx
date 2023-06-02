import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import NCards from './pages/nCards/NCards';
import NCard from './pages/nCard/NCard';
import Add from './pages/add/Add';
import Contracts from './pages/contracts/Contracts';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import MynCards from './pages/mynCards/MynCards';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./App.scss"

function App() {
  const Layout = () => {
    return (
      <div className="app">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/nCards",
          element: <NCards/>
        },
        {
          path: "/nCard/:id",
          element: <NCard/>
        },
        {
          path: "/contracts",
          element: <Contracts/>
        },
        {
          path: "/mynCards",
          element: <MynCards/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/mynCards",
          element: <MynCards/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />     
    </div>
  );
}

export default App;
