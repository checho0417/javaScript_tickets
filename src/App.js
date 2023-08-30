import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './paginas/auth/login';

import './App.css';
import CrearCuenta from './paginas/auth/crearCuenta';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Login/>}/>
          <Route path="/crearCuenta" exact element = {<CrearCuenta/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
