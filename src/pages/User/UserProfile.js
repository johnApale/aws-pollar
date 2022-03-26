import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserInformation } from "../../models";
import { DataStore } from "aws-amplify";
import "./UserProfile.css";

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    try {
      const user = await DataStore.query(UserInformation, (u) =>
        u.username("eq", username)
      );
      setUserData(user);
    } catch (error) {
      console.log("Error fetching user data, ", error);
    }
  });
  return (
    <div className="user">
      <div className="userProfile">
        {userData.map((val, key) => {
          return (
            <>
              {" "}
              <div className="profile_header">
                <h1 className="username">{val.username} </h1>
                {/* <img src="/1.png" className="user_avatar" /> */}

                <div className="user_info">
                  <p className="user_bday">Birthday: {val.birthday} </p>
                  <p className="user_gender">Gender: {val.sex}</p>
                  <p className="date_joined"> Joined: {val.createdAt}</p>
                </div>

                <div className="profile_tabs">
                  <ul>
                    <a className="goToPolls">Polls</a>
                    <a className="goToLikes">Likes</a>
                    <a className="goToFollowers">Followers</a>
                    <a className="goToFollowing">Following</a>
                  </ul>
                </div>

                {/*will load if the user is on their own page */}
                <template id="user_edits">
                  <a className="editProfile">Edit Profile</a>
                </template>

                {/*will load if the user is on another users page */}
                <template id="subscribe">
                  <button className="user_subscribes" id="sub">
                    Follow
                  </button>
                </template>
              </div>
              <div className="polls">
                <img src="/1.png" className="poll_avatar" />
                <a className="poll_link">
                  {" "}
                  what is your favorite favoritefdfsfssdfsfsdcolor?
                </a>
                <p className="poll_username">Username</p>
                <p className="description"> Description</p>
                <p className="pollDate">Created: </p>
                <p className="pollCategory">Category: </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserProfile;
