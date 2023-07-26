import React, { useEffect, useState, useCallback } from "react";

import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://tasks-project-78979-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Request failed.");
      }
      const data = await response.json();

      const fetchedMeals = [];
      for (const mealKey in data) {
        fetchedMeals.push({
          id: mealKey,
          name: data[mealKey].name,
          description: data[mealKey].description,
          price: data[mealKey].price,
        });
      }
      setMeals(fetchedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let content;
  
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error && !isLoading){
    content = <p>Something went wrong.</p>;
  } else if (meals.length === 0 && !isLoading) {
    content = <p>There are no available meals.</p>;
  } else {
    content = meals.map((meal) => {
      return <MealItem key={meal.id} meal={meal} />;
    });
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
