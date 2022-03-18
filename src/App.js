import './App.css';
//import {useState} from "react";
import Home from './components/home';
import Landing from './components/landing';
import {Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function App() {
 
  const location = useLocation();
  return (
  <>

      <AnimatePresence exitBeforeEnter>  {/* ANIMATES EACH PAGE AT ENTER AND EXIT */}
        <Routes location={location} key={location.pathname}>  {/* LOCATION LET'S ANIMATE PRESENCE KNOW WHICH PAGE TO ANIMATE */}
            <Route path='/'  element={ <Landing />} />
            <Route path='home'  element={ <Home />} />
        </Routes>
      </AnimatePresence>
  
    </>
  );
}


export default App;
