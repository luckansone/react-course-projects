import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from  "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const {items} = ctx;
  const numberOfCartItems = items.reduce((curNumber, item)=> {
    return curNumber + item.amount
  }, 0);

  const btnClasses = `${styles.button} ${ btnIsHighlighted ?  styles.bump : ''}`;

  useEffect(()=> {
    if(items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onOpenCart}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
