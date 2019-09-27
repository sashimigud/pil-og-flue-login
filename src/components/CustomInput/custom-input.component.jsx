import React from "react";
import "./custom-input.styles.scss";

const CustomInput = ({ handleChange, label }) => {
  return (
    <>
      <label className="custom-input-label">{label.toUpperCase()}:</label>
      <input
        className="custom-input"
        onChange={handleChange}
        placeholder="..."
        name={label}
      />
    </>
  );
};

export default CustomInput;
