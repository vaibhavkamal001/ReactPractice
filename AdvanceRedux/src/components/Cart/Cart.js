import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.item);
  const cartList = cartItem.map((ele) => (
    <CartItem
      key={Math.random(1, 1000)}
      item={{
        id: ele.id,
        title: ele.title,
        quantity: ele.quantity,
        totalPrice: ele.totalPrice,
        price: ele.price,
      }}
    />
  ));

  const cartDetails = (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartList}</ul>
    </Card>
  );

  return cartList.length > 0 && cartDetails;
};

export default Cart;
