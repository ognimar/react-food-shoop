import Header from "./components/Layout/header";
import CartProvider from "./components/cart/Context-provider";
import MealsSummary from "./components/Meals/MealsSummary";
import Dummy from "./components/Meals/dummy-meals";
import ItemShop from "./components/cart/CarItemShoping.js";
import React, { useState } from "react";

function App() {
  const [cartShow, setCartShow] = useState(false);

  function Show() {
    setCartShow(true);
  }
  function Hide() {
    setCartShow(false);
  }

  return (
    <CartProvider>
      {cartShow && <ItemShop onHide={Hide} />}
      <Header onShow={Show} />
      <MealsSummary />
      <Dummy />
    </CartProvider>
  );
}

export default App;
