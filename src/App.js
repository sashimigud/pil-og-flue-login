import React from "react";
import bouvetLogo from "./assets/Bouvet-logo.png";
import "./App.css";

import Login from "./components/login/login.component";
import SignUp from "./components/signup/sign-up.component";
import Dashboard from "./components/dashboard/dashboard.component";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="pof-heading">Pil og Flue</h1>
        {/* <SignUp>SIGN UP</SignUp>
        <SignUp>UPDATE DETAILS</SignUp> */}
        {/* <Login /> */}
        <Dashboard />
        <img className="bouvet-logo" src={bouvetLogo} alt="Bouvet logo" />
      </div>
    </div>
  );
}

export default App;
