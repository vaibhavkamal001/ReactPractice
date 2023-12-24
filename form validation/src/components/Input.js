import React from "react";
import useInputValidation from "./hooks/use-inputValidation";

const Input = React.forwardRef((props, ref) => {
  const { isValidInput, isBlur, validateInput, validateBlur } =
    useInputValidation();

  const validateInputChange = (event) => {
    props.valid(validateInput(props.validateFun, ref.current.value));
  };

  const validateIsBlur = (event) => {
    props.valid(validateBlur(props.validateFun, ref.current.value));
  };

  const invalidClassInput =
    isBlur && isValidInput ? "form-control" : "form-control invalid input";

  return (
    <div className={invalidClassInput}>
      <label htmlFor={props.labelData.htmlFor}>{props.labelData.label}</label>
      <input
        ref={ref}
        onChange={validateInputChange}
        onBlur={validateIsBlur}
        {...props.inputData}
      />
    </div>
  );
});

export default Input;
