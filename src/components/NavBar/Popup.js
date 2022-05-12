import React from "react";

import "./Popup.css";

function Popup() {
  return (
    <div className="Popup">
      <div className="popup__info">
        <h1 className="popup__title">Anonymous mode: </h1>
        <p className="popup__details">
          Switching to anonymous mode prevents you from participating in polls
          that collect data.
        </p>
      </div>
    </div>
  );

}

export default Popup;
