import React, { useState } from "react";
import "./custom-checkbox.styles.scss";

const CustomCheckbox = () => {
  const [attending, setAttending] = useState(false);

  return (
    <div className="checkbox-container">
      <p>I will attend the dinner: </p>
      <input
        className="checkbox"
        type="checkbox"
        onClick={() => {
          setAttending(!attending);
        }}
      />
    </div>
  );
};

export default CustomCheckbox;
