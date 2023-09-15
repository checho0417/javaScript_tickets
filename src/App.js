import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './paginas/auth/login';
import './App.css';
import CrearCuenta from './paginas/auth/crearCuenta';
import Home from './paginas/home';



function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Login/>}/>
          <Route path="/crearCuenta" exact element = {<CrearCuenta/>}/>
          <Route path='/Home' exact element ={<Home/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
