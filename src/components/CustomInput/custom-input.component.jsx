import React from "react";
import "./custom-input.styles.scss";

const CustomInput = ({ handleChange, label }) => {
  return (
    <>
      <label>{label}:</label>
      <input onChange={handleChange} placeholder={label} />
    </>
  );
};

export default CustomInput;
