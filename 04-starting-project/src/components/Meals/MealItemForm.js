import React, { useRef, useState} from "react";
import Input from "../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    var enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  const inputRef = useRef();

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `${props.id}_amount`,
          name: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <span>Please, enter a valid amount.</span>}
    </form>
  );
};

export default MealItemForm;
