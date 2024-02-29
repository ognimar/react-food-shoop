import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem.js";



const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function Dummy() {
  const itemsy = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        price={meal.price}
        name={meal.name}
        description={meal.description}
        id={meal.id}
      />
    );
  });
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{itemsy}</ul>
      </Card>
    </div>
  );
}
