import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpeg';
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onOpenCart={props.onOpenCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meals."/>
      </div>
    </React.Fragment>
  );
};

export default Header;
