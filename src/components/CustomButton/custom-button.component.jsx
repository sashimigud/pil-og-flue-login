import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, handleClick }) => {
  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
