import React, { useState, useEffect } from "react";
import "./login.styles.scss";

import CustomInput from "../CustomInput/custom-input.component";

const Login = () => {
  const [{ username, email }, setCredentials] = useState({
    username: "",
    email: ""
  });
  const [attendingDinner, setAttendingDinner] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    console.log("name: " + name + "and value:" + value);
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
      <form className="login-form" onSubmit={handleSubmit}>
        <CustomInput
          label="username"
          handleChange={handleChange}
          value={username}
          type="text"
          name="username"
          placeholder="Username"
        />
        <CustomInput
          label="email"
          handleChange={handleChange}
          value={email}
          type="text"
          name="email"
          placeholder="Email"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
