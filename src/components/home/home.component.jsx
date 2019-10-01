import React from "react";
import "./home.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-panel">
        <div className="login-link">
          <Link className="home-nav-link pulse" to="/login">
            PLAY NOW
          </Link>
        </div>
      </div>
      <div className="right-panel">
        <div className="sign-up-link">
          <Link className="home-nav-link wiggle" to="/signup">
            SIGN UP HERE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
