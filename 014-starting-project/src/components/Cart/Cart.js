import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  const cartItemsContent = cartItems.map((item) => (
    <CartItem key={`${item.id}_cart_item`} item={item} />
  ));

  return (
    <Fragment>
      {cartIsVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>{cartItemsContent}</ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
