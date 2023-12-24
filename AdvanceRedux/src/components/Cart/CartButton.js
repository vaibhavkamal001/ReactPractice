import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../store/Ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.totalQantity);
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
