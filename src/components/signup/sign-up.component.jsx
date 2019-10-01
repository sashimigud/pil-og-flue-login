import React, { useState, useEffect } from "react";
import "./sign-up.styles.scss";

import CustomInput from "../customInput/custom-input.component";
import CustomButton from "../customButton/custom-button.component";
import CustomCheckbox from "../customCheckbox/custom-checkbox.component";
import { withRouter } from "react-router-dom";

const SignUp = ({ children, history, mode }) => {
  const [{ username, email }, setCredentials] = useState({
    username: "",
    email: ""
  });

  // const [user, setUser] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("submit fired!", username, email);
  // };

  // useEffect(() => {
  //   let url = "https://jsonplaceholder.typicode.com/";
  //   fetch(url + "users/1")
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, []);

  return (
    <div className="signup-container">
      <h2 className="signup-header">{children}:</h2>
      <form className="signup-form" autoComplete="off">
        <CustomInput
          label="username"
          handleChange={handleChange}
          value={username}
          type="text"
          placeholder="Username"
        />
        <CustomInput
          label="email"
          handleChange={handleChange}
          value={email}
          type="text"
          placeholder="Email"
        />
        <CustomCheckbox />
        <CustomButton
          handleClick={() => {
            history.push("/dashboard");
          }}
        >
          {children}
        </CustomButton>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
