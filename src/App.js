import React from "react";
import bouvetLogo from "./assets/Bouvet-logo.png";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home/home.component";
import Login from "./components/login/login.component";
import SignUp from "./components/signup/sign-up.component";
import Dashboard from "./components/dashboard/dashboard.component";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="pof-heading">Pil og Flue</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" render={() => <SignUp>SIGN UP</SignUp>} />
          <Route path="/dashboard" component={Dashboard} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <img className="bouvet-logo" src={bouvetLogo} alt="Bouvet logo" />
      </div>
    </div>
  );
}

export default App;
