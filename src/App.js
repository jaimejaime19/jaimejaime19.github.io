import React from 'react';

import {Navbar, Brand} from './components';
import {Footer, Whoami, Header, Extra, Accomplish} from './containers';
import './App.css';



const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Whoami/>
        <Extra/>
        <Brand/>
        <Accomplish/>
        <Footer/>
    </div>
  )
}

export default App
