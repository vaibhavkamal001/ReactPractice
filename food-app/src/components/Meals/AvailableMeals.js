import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import useFetchApi from "../../fetch/useFetchApi";

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const { isLoading, httpError, fetchFun } = useFetchApi();

  const addMeals = (items) => {
    const meals = [];
    for (const element in items) {
      meals.push(
        <MealItem
          key={element}
          id={element}
          name={items[element].name}
          description={items[element].description}
          price={items[element].price}
        />
      );
    }
    setMealsList(meals);
  };

  useEffect(() => {
    fetchFun(
      {
        url: "https://react-demo-73944-default-rtdb.firebaseio.com/meals.json",
      },
      addMeals
    );
  }, [fetchFun]);
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading.....</p>}
        {httpError && <p>{httpError}</p>}
        {!isLoading && !httpError && <ul> {mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
