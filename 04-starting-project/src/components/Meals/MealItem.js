import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const onAddToCartHandler = amount => {
    ctx.addItem({
        id: props.meal.id,
        name: props.meal.name,
        price: props.meal.price,
        amount: amount
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} id={props.meal.id}/>
      </div>
    </li>
  );
};

export default MealItem;
