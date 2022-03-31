import React from "react";
import "./Notifications.css"
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "react-router-dom";

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

export default class Notification extends React.Component {
    createNotification(type) {
        return () => {
          switch (type) {
            case 'Subscribed':
            NotificationManager.info('A user has subscribed to you.');
            break;
            case 'Liked':
            NotificationManager.success('A user liked your post.', 'Liked');
            break;
            case 'Posted':
            NotificationManager.success('Someone you follow has posted a new poll.', 'New Post');
            break;
            }
        };
    };
}

