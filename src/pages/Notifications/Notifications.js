import React from "react";
import "./Notifications.css"

function Notifications() {

    return(
        <div className="notifications_page">

        <div className="header">
        <img src = "notif_icon .png" className="bellIcon"></img>
        <h className = "title"> Notifications</h>
        </div>


        <div className = "user_notifications">
            <p className = "userName" href = "">username </p>
            <p className = "notification_purpose"> nofdsf</p>
            <a className = "pollTitle" href = ""> ffddsdf</a>
        </div>
        
        </div>
    );


}

export default Notifications;