import React, { useContext, useState } from "react";
import Input from "./Input";
import ValidateFormCtx from "./context/ValidateFromCtx";

const BasicForm = (props) => {
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const emailNameRef = React.createRef();

  const validateFormCtx = useContext(ValidateFormCtx);
  const [isValidForm, setValidForm] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (
      validateFormCtx.isValidEmail &&
      validateFormCtx.isValidFirstName &&
      validateFormCtx.isValidLastName
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }

    if (!validateFormCtx.isValidFirstName) {
      firstNameRef.current.focus();
    } else if (!validateFormCtx.isValidLastName) {
      lastNameRef.current.focus();
    } else if (!validateFormCtx.isValidEmail) {
      emailNameRef.current.focus();
    }

    console.log("Form is valid : ", isValidForm);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="control-group">
        <Input
          ref={firstNameRef}
          valid={validateFormCtx.validateFirstName}
          validateFun={(val) => val.trim() !== ""}
          labelData={{ htmlFor: "name", label: "First Name" }}
          inputData={{ type: "text", id: "first name" }}
        />
        <Input
          ref={lastNameRef}
          valid={validateFormCtx.validateLastName}
          validateFun={(val) => val.trim() !== ""}
          labelData={{ htmlFor: "name", label: "Last Name" }}
          inputData={{ type: "text", id: "last name" }}
        />
        <Input
          ref={emailNameRef}
          valid={validateFormCtx.validateEmail}
          validateFun={(val) => val.trim().includes("@")}
          labelData={{ htmlFor: "name", label: "E-Mail Address" }}
          inputData={{ type: "text", id: "Email name" }}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
