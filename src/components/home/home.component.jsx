import React from "react";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-panel">
        <div className="login-link">
          <h1>LOGIN HERE</h1>
        </div>
      </div>
      <div className="right-panel">
        <div className="sign-up-link">
          <h1>SIGN UP HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
