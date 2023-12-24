import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { AuthContext } from "../../context/auth-context";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
  if (action.title === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.title === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.title === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  } else if (action.title === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailValue, emailDispacher] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordValue, passwordDispacher] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailValue;
  const { isValid: passwordIsValid } = passwordValue;

  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timeOutHandler);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispacher({ title: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispacher({ title: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispacher({ title: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    passwordDispacher({ title: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.logIn(emailValue.value, passwordValue.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailValue.isValid}
          Lable="Email"
          Type="text"
          Id="email"
          Value={emailValue.value}
          OnChange={emailChangeHandler}
          OnBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordValue.isValid}
          Lable="Password"
          Type="password"
          Id="password"
          Value={passwordValue.value}
          OnChange={passwordChangeHandler}
          OnBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
