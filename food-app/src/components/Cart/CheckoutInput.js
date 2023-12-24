import React from "react";

import classes from "./Checkout.module.css";

const CheckoutInput = React.forwardRef((props, ref) => {
  return (
    <div
      className={
        props.valid ? classes.control : `${classes.control} ${classes.invalid}`
      }
    >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default CheckoutInput;
