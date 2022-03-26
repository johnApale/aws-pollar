import React from "react";
import "./UserProfile.css"



function UserProfile() {
  return (
    <div className="liked_polls">

        <div className = "polls">
            <img src="/profilepic1.png" className="poll_avatar" />
            <a className = "poll_link"> what is your favorite favoritefdfsfssdfsfsdcolor?</a>
            <p className = "poll_username">Username</p>
            <p className="description"> Description</p>
            <p className="pollDate">Created: </p>
            <p className = "pollCategory">Category: </p>
         
        </div>
    
    </div>
  );
}

export default UserProfile;