import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from './components/Login';
import Bienestar from './components/Bienestar';
import Perfil from './components/Perfil';
import Planificación from './components/Planificación';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Router path="/planificación">
           <Planificación/>
          </Router>
          <Router path="/bienestar">
            <Bienestar/>
          </Router>
          <Router path="/perfil">
            <Perfil/>
          </Router>
          <Router path="/">
           <Login/>
          </Router>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
