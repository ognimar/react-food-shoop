import React from "react";
import classes from "./Input.module.css";
 const  Input=  React.forwardRef((props, ref) => {
  return (
    
      <div className={classes.input}>
        <label>{props.label}</label>
        <input
          min={props.min}
          max={props.max}
          type={props.type}
          value={props.value}
          id={props.id}
          defaultValue={props.defaultValue}
          ref={ref}
        ></input>
      </div>
    
  );
});

export default Input;
