import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  logIn: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextPovider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.log("EmailId : " + email);
    console.log("Password : " + password);

    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logIn: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
