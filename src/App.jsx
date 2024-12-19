import React from 'react'
import { useRoutes } from 'react-router-dom'
import ROUTES from './utils/Route'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from "./pages/Contact"
import Footer from './components/Footer'

const App = () => {

  const routes = useRoutes ([
    {
      path: ROUTES.HOME,
      element: <Home/>
    },

    {
      path: ROUTES.COLLECTION,
      element: <Collection/>
    },


    {
      path: ROUTES.ABOUT,
      element: <About/>
    },

    {
      path: ROUTES.CONTACT,
      element: <Contact/>
    }


  ]);

  return (
    <div>
      <Navbar />
      {routes}
      <Footer/>
    </div>
  );
};
export default App  