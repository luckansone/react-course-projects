import React from "react";

import MealItem from "./MealItem";
import DUMMY_MEALS from "./data/meals-data";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        meal={meal}
      />
    );
  });

  return (
    <section className={styles.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
  );
};

export default AvailableMeals;
