import React from "react";

import classes from "../Login/Login.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.Lable}>{props.Lable}</label>
      <input
        type={props.Type}
        id={props.Id}
        value={props.Value}
        onChange={props.OnChange}
        onBlur={props.OnBlur}
      />
    </div>
  );
};

export default Input;
