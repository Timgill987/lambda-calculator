import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operator-button">
      {props.button}
    </button>
  );
};

export default OperatorButton;