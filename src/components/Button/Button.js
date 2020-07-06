import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="mbtn mbtn--white"
    >
      {props.children}
    </button>
  );
};

export default Button;