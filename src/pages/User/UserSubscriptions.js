import React from "react";
import "./Following.css"
import { DataStore } from "aws-amplify";
import Notification from "/pages/Notifications/Notification";
import receiveNotification from "App";

const myNotif = new Notification();

function UserSubscriptions() {
  const [subscribe, setSubscribe] = useState(false);
  
  let thisUser = await DataStore.query(UserInformation, x => x.id(eq, 0))
  
  async function subscribeButton()
  {
    let originalList = await DataStore.query(SubscribedTo, c => c.id(eq, thisUser.id));
    let thisUser = 0;
    setSubscribe(!subscribe)
    
    if (subscribe) //If user clicks "Subscribe"
    {
      await DataStore.save(
        LikedPost.copyOf(originalList, updatedList => {
          updatedList.SubscribedTo.append(thisUser);
        })
      )

      let subscribeToUser = await DataStore.query(Poll, x => x.UserInformation(eq, thisPoll.UserInformation))
      receiveNotification('Subscribed')
    }
    
    if (!subscribe) //If user clicks "Unsubscribe"
    {
      await DataStore.save(
        LikedPost.copyOf(originalList, updatedList => {
          updatedList.SubscribedTo.remove(thisUser);
        })
      )
    }
  }

  return (
    <div className="user_subscriptions">
        <div className = "useraccount">
            <img src="/profilepic1.png" className="user_avatar" />
            <a className = "user_link"> username</a>
        </div>
    
    </div>
  );
}

export default UserSubscriptions;