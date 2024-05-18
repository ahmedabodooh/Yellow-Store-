import './App.css';
import Home from './commponents/Home/Home';
import Navbarpage from './commponents/navs/Navbarpage';
import Products from './commponents/Products/Products';
import Contact from './commponents/contact/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Deatails from './commponents/deatails/Deatails';
function App() {
  return (
    <>
    <Navbarpage/>
    <Home/>
    <Products/>
    <Contact/>
    </>
  );
}

export default App;
