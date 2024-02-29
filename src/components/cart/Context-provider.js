import Variab from "./Context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

function LastSnapshot(state, action) {
    if(action.type==='ADD_NEW_AMOUNT'){
      const newItems = [...state.items];
      if (!isNaN(action.item.price) && !isNaN(action.item.amount)) {
        newItems.push(action.item);
      }
        const newTotalAmount = state.totalAmount + (
          !isNaN(action.item.price) && !isNaN(action.item.amount)
            ? action.item.price * action.item.amount
            : 0
        );
        console.log( newTotalAmount);
        return{
            items: newItems,
            totalAmount: newTotalAmount
        };
        
    }
    if(action.type==='REMOVE_OLD_AMOUNT'){
        
    }
  return defaultState;
}

export default function CartProvider(props) {
  const [amount, dispatchAmount] = useReducer(LastSnapshot, defaultState);
  function AddToCart(item) {
    dispatchAmount({type: 'ADD_NEW_AMOUNT', item: item})
  }

  function RemoveFromCart(id) {
    dispatchAmount({type: 'REMOVE_OLD_AMOUNT', id: id})
  }

  const cartContext = {
    items: amount.items,
    totalAmount: amount.totalAmount,
    Add: AddToCart,
    Remove: RemoveFromCart,
  };
  
  return (
    <Variab.Provider value={cartContext}>{props.children}</Variab.Provider>
  );
}
