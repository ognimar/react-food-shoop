import Variab from "../cart/Context";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React, { useContext } from "react";

export default function HButton(props) {
  const cxt = useContext(Variab);

  const numberOfItems = cxt.items.reduce((firstsnap, second) => {
    return firstsnap+second.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
