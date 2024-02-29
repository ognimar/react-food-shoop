import Variab from "../cart/Context";
import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealsForm";

export default function MealItem(props) {
  const ctx = useContext(Variab);
  function AddHandler(amount) {
    ctx.Add({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <MealForm AddToCart={AddHandler} />
      </li>
    </React.Fragment>
  );
}
