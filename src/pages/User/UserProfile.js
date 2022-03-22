import React from "react";
import "./UserProfile.css"



function UserProfile() {
  return (

     <div className="user"> 
      <div className= "userProfile" >

      <div className = "profile_header">
      <h1 className="username">username </h1>

      <img src="/1.png" className="user_avatar" />

    
      <div className = 'user_info'>
      <p className = "user_bday">Birthday: September 13, 1999 </p>
      <p className="user_gender">Gender:  </p>
      <p className= "date_joined"> Joined: </p>
    </div>

    <div className="profile_tabs">
    <ul>
        <a className="goToPolls">
            Polls
        </a>
        <a className = "goToLikes">
            Likes
        </a>
        <a className="goToFollowers">
            Followers
        </a>
        <a className = "goToFollowing">
            Following
        </a>
    </ul>
    </div>


    {/*will load if the user is on their own page */ }
    <template id = "user_edits">
    <a className="editProfile">
        Edit Profile 
    </a>
    </template>

    {/*will load if the user is on another users page */} 
    <template id = "subscribe">
        <button className= "user_subscribes" id = "sub">
            Follow
        </button>
    </template> 
    
    </div>
    </div>

    <div className = "polls">
        <img src="/1.png" className="poll_avatar" />
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