import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/backdrop";
export default function ItemShop(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideClick={props.onHide} />,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
}
