import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Save from "./pages/Save";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (


    <Router>

    <div>
    <Nav />
    <Switch>
      <Route exact path= "/" component= {Home}></Route>
      <Route exact path= "/Save" component= {Save}></Route>
      <Route component= {NoMatch}></Route>
      
    </Switch>
    </div>


      

    </Router>





  );
}

export default App;
