import React from "react";
import "./Notifications.css"
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "react-router-dom";

function Notification() {
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

// class Notification extends React.Component {
//     createNotification = (type) => {
//         return () => {
//           switch (type) {
//             case 'info':
//             NotificationManager.info('Info message');
//             break;
//             case 'success':
//             NotificationManager.success('Success message', 'Title here');
//             break;
//             case 'warning':
//             NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//             break;
//             case 'error':
//             NotificationManager.error('Error message', 'Click me!', 5000, () => {
//                 alert('callback');
//             });
//             break;
//             }
//         };
//     };
// }

export default Notification;

