import React, { useState } from "react";
import "./dashboard.styles.scss";
import SignUp from "../signup/sign-up.component";
import CustomButton from "../customButton/custom-button.component";

const Dashboard = () => {
  const [showPanel, setShowPanel] = useState(false);

  const handleClick = () => {
    setShowPanel(!showPanel);
    console.log("klikked");
  };

  return (
    <div className="dashboard-container">
      <div>
        <h1 className="user-greeting">Hello Username</h1>
        <p className="user-message">Get ready to play!</p>
      </div>
      <div className="dash-button-container">
        <CustomButton handleClick={handleClick}>
          TOGGLE UPDATE DETAILS
        </CustomButton>
      </div>
      <p>OR</p>
      <button className="logout-button">LOG OUT</button>
      {showPanel ? <SignUp>UPDATE DETAILS</SignUp> : null}
    </div>
  );
};

export default Dashboard;
