import classes from "../cart/cart.module.css";
import classes2 from "../cart/modal.module.css";
import CartItem from "../cart/CartItem";
import React, { useContext } from "react";
import Variab from "../cart/Context";

export default function Backdrop(props) {
  
  const ctx = useContext(Variab);
  function AddHandler(amount) {
    ctx.Add({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    
  }
  const numberOfItems = `$${ctx.totalAmount.toFixed(2)}`;
  return (
    <React.Fragment>
      <div className={classes2.backdrop} onClick={props.onHideClick}></div>
      <div className={classes2.modal}>
        {<CartItem AddOneToCart={AddHandler}

        />}
        <div className={classes.total}>
          <h2>Total:{numberOfItems}</h2>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Order</button>
          <button className={classes.button} onClick={props.onHideClick}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
