import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkoutForm, setCheckoutForm] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const openCheckoutForm = () => {
    setCheckoutForm(true);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const closeBtn = (
    <button className={classes["button--alt"]} onClick={props.onClose}>
      Close
    </button>
  );

  const orderBtn = hasItems && (
    <button className={classes.button} onClick={openCheckoutForm}>
      Order
    </button>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onSubmit = () => {
    cartCtx.removeAllItem();
    setCheckoutForm(false);
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        {checkoutForm && (
          <Checkout
            onClose={props.onClose}
            cartItems={cartCtx.items}
            onSubmit={onSubmit}
          />
        )}
      </div>
      <div className={classes.actions}>
        {!checkoutForm && closeBtn}
        {!checkoutForm && orderBtn}
      </div>
    </Modal>
  );
};

export default Cart;
