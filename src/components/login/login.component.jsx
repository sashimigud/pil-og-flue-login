import React, { useState, useEffect } from "react";
import "./login.styles.scss";

import { withRouter } from "react-router-dom";

import CustomInput from "../customInput/custom-input.component";
import CustomButton from "../customButton/custom-button.component";

const Login = ({ history }) => {
  const [{ username, email }, setCredentials] = useState({
    username: "",
    email: ""
  });

  // const [user, setUser] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    // console.log("name: " + name + " and value:" + value);
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("submit fired!", username, email);
  };

  // useEffect(() => {
  //   let url = "https://jsonplaceholder.typicode.com/";
  //   fetch(url + "users/1")
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, []);

  return (
    <div className="login-container">
      <h2 className="login-header">PLAY NOW</h2>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <CustomInput
          label="username"
          handleChange={handleChange}
          value={username}
          type="text"
        />
        <CustomButton handleClick={() => history.push("/dashboard")}>
          PLAY
        </CustomButton>
      </form>
    </div>
  );
};

export default withRouter(Login);
