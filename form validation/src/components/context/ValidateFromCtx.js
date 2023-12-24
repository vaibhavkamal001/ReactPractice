import React, { useState } from "react";

const ValidateFormCtx = React.createContext({
  isValidFirstName: false,
  isValidLastName: false,
  isValidEmail: false,
  validateFirstName: (flag = false) => {},
  validateLastName: (flag = false) => {},
  validateEmail: (flag = false) => {},
});

export const ValidateFormCtxProvider = (props) => {
  const [isValidFirstName, setValidFirstName] = useState(false);
  const [isValidLastName, setValidLastName] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);

  const validateFirstName = (flag) => {
    setValidFirstName(flag);
  };
  const validateLastName = (flag) => {
    setValidLastName(flag);
  };
  const validateEmail = (flag) => {
    setValidEmail(flag);
  };

  return (
    <ValidateFormCtx.Provider
      value={{
        isValidFirstName,
        isValidLastName,
        isValidEmail,
        validateFirstName,
        validateLastName,
        validateEmail,
      }}
    >
      {props.children}
    </ValidateFormCtx.Provider>
  );
};

export default ValidateFormCtx;
