import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { AuthActions } from "../store/counterRedux";
import { Fragment } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.logIn);

  const logOut = () => {
    dispatch(AuthActions.logIn());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLogin && (
            <Fragment>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
