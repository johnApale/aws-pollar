import React from "react";
import "./Notifications.css";
import {
  NotificationContainer,
  NotificationManager,
  createNotification,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "react-router-dom";

class Notification extends React.Component {
  createMyNotification = (type) => {
    return () => {
      switch (type) {
        case "Subscribed":
          NotificationManager.info("A user has subscribed to you.");
          break;
        case "Liked":
          NotificationManager.success("You have liked a user's post.", "Liked");
          break;
        case "Posted":
          NotificationManager.success(
            "Someone you follow has posted a new poll.",
            "New Post"
          );
          break;
      }
    };
  };
}

// function Notification() {
//     return(
//         <div className="notifications_page">

//         <div className="header">
//         <img src = "notif_icon .png" className="bellIcon"></img>
//         <h className = "title"> Notifications</h>
//         </div>

//         <div className = "user_notifications">
//             <p className = "userName" href = "">username </p>
//             <p className = "notification_purpose"> nofdsf</p>
//             <a className = "pollTitle" href = ""> ffddsdf</a>
//         </div>

//         </div>
//     );
// }

export default Notification;
