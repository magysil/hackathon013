import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from './View/Login';
import Bienestar from './components/Bienestar';
import Perfil from './components/Perfil';
import Planificación from './View/Planificacion';
import Register from './View/Auth';
import Recovert from './View/Recover';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Router path="/planificacion">
           <Planificación/>
          </Router>
          <Router path="/bienestar">
            <Bienestar/>
          </Router>
          <Router path="/perfil">
            <Perfil/>
          </Router>
          <Router path="/" exact>
           <Login/>
          </Router>  
          <Router path="/register">
           <Register/>
          </Router>
          <Router path="/recover">
           <Recovert/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
