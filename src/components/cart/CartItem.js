import React, { useState } from "react";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import Variab from "./Context";

const CartItem = (props) => {
  const ctx = useContext(Variab);

  /*  const price = `$${props.price.toFixed(2)}`; */
  return (
    <React.Fragment key={props.id}>
      <li className={classes["cart-item"]}>
        <div>
          <h2></h2>
          <div className={classes.summary}>
            <span className={classes.price}>{props.price}</span>
            <span className={classes.amount}></span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={ctx.Remove}>−</button>
          <button onClick={ctx.Add}>+</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
