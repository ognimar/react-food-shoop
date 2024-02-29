import react from "react";
import classes from "./Header.module.css";
import mealsImage from "./meals.png";
import HButton from "./Hbutton";

export default function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HButton onClick={props.onShow}></HButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="JEDZENIE" />
      </div>
    </div>
  );
}
