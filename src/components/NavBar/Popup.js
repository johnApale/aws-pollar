import React from "react";
import "./NavBar.css";

const Popup = props => {
    return (
        <div className = "popup-box">
            <div className="box">
                <button className = "close" onClick = {props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    );
}

export default Popup; 