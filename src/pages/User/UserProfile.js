import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getUserInformation, pollByUser } from "../../graphql/queries";
import "./UserProfile.css";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [polls, setPolls] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      // get user data
      const userData = await API.graphql(
        graphqlOperation(getUserInformation, { usernameID: username })
      );
      console.log(userData.data.getUserInformation);
      setUser(userData.data.getUserInformation);
      // get polls created by user
      const pollsData = await API.graphql(
        graphqlOperation(pollByUser, { userID: username })
      );
      setPolls(pollsData.data.pollByUser.items);
      console.log(pollsData.data.pollByUser.items);
    }
    fetchData();
  }, [username]);

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

  function countLikes(valPoll) {
    if (!valPoll.likes.nextToken) {
      valPoll.likeCounts = 0;
    }
  }

  return (
    <div className="user">
      <div className="userProfile">
        <div className="profile_header">
          <h3 className="profile_username">{username} </h3>
          <img src="/1.png" className="user_avatar" />

          <div className="user_info">
            <p className="user_bday">Birthday: {formatDate(user?.bday)} </p>
            <p className="user_gender">Gender: {user?.sex}</p>
          </div>
          <p className="date_joined"> Joined: {formatDate(user?.createdAt)}</p>

          <div className="profile_tabs">
            <a className="goToPolls">Polls</a>
            <a className="goToLikes">Likes</a>
            <a className="goToFollowers">Followers</a>
            <a className="goToFollowing">Following</a>
          </div>

          <template id="user_edits">
            <a className="editProfile">Edit Profile</a>
          </template>

          <template id="subscribe">
            <button className="user_subscribes" id="sub">
              Follow
            </button>
          </template>
        </div>
        <div className="polls">
          {polls?.map((val, key) => {
            countLikes(val);
            return (
              <div
                className="user_poll_cards"
                key={key}
                onClick={() => goToPoll(val.id)}
              >
                <p className="user_poll_title">{val.title}</p>

                <div className="stats">
                  <p className="user_poll_views">Views: {val.views}</p>
                  <p className="user_poll_likes">Likes: {val.likeCounts}</p>
                </div>
                <p className="user_poll_created">{formatDate(val.createdAt)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{
  /* {polls?.map((poll) => {
            return (
              <div
                className="user_poll_cards"
                onClick={() => goToPoll(poll.id)}
              >
                <p className="user_poll_title">{poll.title}</p>

                <div className="stats">
                  <p className="user_poll_views">Views: {poll.views}</p>
                  <p className="user_poll_likes">Likes: {poll.likes}</p>
                </div>
                <p className="user_poll_created">
                  {formatDate(poll.createdAt)}
                </p>
              </div>
            );
          })} */
}

export default UserProfile;
