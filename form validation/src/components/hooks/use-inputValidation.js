import { useState } from "react";

const useInputValidation = () => {
  const [isValidInput, setValidInput] = useState(true);
  const [isBlur, setBlur] = useState(true);

  const validateInput = (applyFunction, val = "") => {
    const flag = applyFunction(val);
    setValidInput(flag);
    return flag;
  };

  const validateBlur = (applyFunction, val = "") => {
    const flag = applyFunction(val);
    setBlur(flag);
    return flag;
  };

  return {
    isValidInput,
    validateInput,
    validateBlur,
    isBlur,
  };
};

export default useInputValidation;
