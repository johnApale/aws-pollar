import React from "react";


const Popup = props => {
    return (
        <div className = "popupbox">
            <div className="box">
                <span className = "close" onClick = {props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
}

export default Popup; 