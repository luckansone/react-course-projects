import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const hasFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = hasFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirmOrder({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostal,
        city: enteredCity
    });
  };

  const getControlClasses = (isValid) => {
    return `${styles.control} ${
        isValid ? "" : styles.invalid
      }`;
  }

  const nameControlClasses = getControlClasses(formInputsValidity.name);
  const streetControlClasses = getControlClasses(formInputsValidity.street);
  const postalControlClasses = getControlClasses(formInputsValidity.postal);
  const cityControlClasses = getControlClasses(formInputsValidity.city);

  return (
    <form onSubmit={onSubmitFormHandler} className={styles.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your name</label>
        <input ref={nameInputRef} id="name" type="text" />
        {!formInputsValidity.name && <p>Entered name is not valid</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} id="street" type="text" />
        {!formInputsValidity.street && <p>Entered street is not valid</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} id="postal" type="text" />
        {!formInputsValidity.postal && <p>Entered postal is not valid</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} id="city" type="text" />
        {!formInputsValidity.city && <p>Entered city is not valid</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
