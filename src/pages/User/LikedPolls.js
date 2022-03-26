import React from "react";
import "./LikedPolls.css"



function LikedPolls() {
  return (

    <div className = "polls">
        <img src="/1.png" className="poll_avatar" />
        <a className = "poll_link"> what is your favorite favoritefdfsfssdfsfsdcolor?</a>
        <p className = "poll_username">Username</p>
        <p className="description"> Description</p>
        <p className="pollDate">Created: </p>
        <p className = "pollCategory">Category: </p>
         
    </div>
    
   
  );
}

export default LikedPolls;