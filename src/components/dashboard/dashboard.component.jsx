import React, { useState } from "react";
import "./dashboard.styles.scss";
import SignUp from "../signup/sign-up.component";
import CustomButton from "../customButton/custom-button.component";

import { withRouter } from "react-router-dom";

const Dashboard = ({ history }) => {
  const [showPanel, setShowPanel] = useState(false);

  const handleClick = () => {
    setShowPanel(!showPanel);
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
      {showPanel ? <SignUp>UPDATE DETAILS</SignUp> : null}
      <p>OR</p>
      <button onClick={() => history.push("/")} className="logout-button">
        LOG OUT
      </button>
    </div>
  );
};

export default withRouter(Dashboard);
