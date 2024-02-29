import Input from "../UI/input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";
import Variab from "../cart/Context";
import React, { useContext } from "react";
export default function MealForm(props) {
  const InputVal =useRef();
  const ctx = useContext(Variab);

  function saveForm(event){
    event.preventDefault();

    const newValueOfAmount = InputVal.current.value;
   
    const NumberOfAmount = +newValueOfAmount;

    props.AddToCart(NumberOfAmount);
  }
  
  return (
    <form className={classes.form} onSubmit={saveForm} >
      <Input
        type="number"
        value={props.id}
        id={props.id}
        label="Amount"
        min="0"
        max="6"
        defaultValue={1}
        ref={InputVal}
      ></Input>
      <button type="submit" onClick={ctx.Add}>+ Add</button>
    </form>
  );
}
