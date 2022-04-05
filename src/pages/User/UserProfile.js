import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { UserInformation, Poll } from "../../models";
import { DataStore, API } from "aws-amplify";
import { getUserPolls } from "../../graphql/queries";
import "./UserProfile.css";

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = useState([]);
  const [polls, setPolls] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const user1 = await DataStore.query(UserInformation, (u) =>
        u.username("eq", username)
      );
      setUserData(user1);
    } catch (error) {
      console.log("Error fetching user data, ", error);
    }
    const user = {};
    userData.map((val, key) => {
      const user = new UserInformation({
        id: val.id,
        username: val.username,
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        bday: val.bday,
        anon: val.anon,
        sex: val.sex,
      });
      const pullData = async () => {
        const data = await API.graphql({query: getUserPolls, variables: {filter:}})
      }
    });
    // try {
    //   const pollList = await DataStore.query(Poll, (p) =>
    //     p.UserInformation("eq", user)
    //   );
    //   setPolls(pollList);
    // } catch (error) {
    //   console.log("Error, ", error);
    // }
  }, [username]);

  async function getPollData(userInfo) {
    console.log(userInfo);
    try {
      const pollList = await DataStore.query(Poll, (p) =>
        p.UserInformation("eq", userInfo)
      );
      setPolls(pollList);
      console.log(polls);
    } catch (error) {
      console.log("Error, ", error);
    }
  }

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const updatedDate = date.toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return updatedDate;
  };

  function goToPoll(pollID) {
    navigate({
      pathname: "/poll/view",
      search: `?${createSearchParams({ id: pollID })}`,
      replace: true,
    });
  }

  return (
    <div className="user">
      <div className="userProfile">
        {userData.map((val, key) => {
          return (
            <>
              {" "}
              <div className="profile_header">
                <h3 className="profile_username">{val.username} </h3>
                {/* <img src="/1.png" className="user_avatar" /> */}

                <div className="user_info">
                  <p className="user_bday">Birthday: {formatDate(val.bday)} </p>
                  <p className="user_gender">Gender: {val.sex}</p>
                </div>
                <p className="date_joined">
                  {" "}
                  Joined: {formatDate(val.createdAt)}
                </p>

                <div className="profile_tabs">
                  <a className="goToPolls">Polls</a>
                  <a className="goToLikes">Likes</a>
                  <a className="goToFollowers">Followers</a>
                  <a className="goToFollowing">Following</a>
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
                {polls.map((val, key) => {
                  return (
                    <div
                      className="user_poll_cards"
                      onClick={() => goToPoll(val.id)}
                    >
                      <p className="user_poll_title">{val.title}</p>

                      <div className="stats">
                        <p className="user_poll_views">Views: {val.views}</p>
                        <p className="user_poll_likes">Likes: {val.likes}</p>
                      </div>
                      <p className="user_poll_created">
                        {formatDate(val.createdAt)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserProfile;
