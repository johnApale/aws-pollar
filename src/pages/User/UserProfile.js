import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import {
  followersByUser,
  getFollow,
  getUserInformation,
  pollByUser,
  userFollowers,
} from "../../graphql/queries";
import "./UserProfile.css";
import {
  createConversation,
  createFollow,
  deleteFollow,
} from "../../graphql/mutations";
import Messages from "../../components/ Messages/Messages";

function UserProfile(props) {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [polls, setPolls] = useState();
  const [likedPolls, setLikedPolls] = useState();
  const [answeredPolls, setAnsweredPolls] = useState();
  const [follow, setFollow] = useState("Follow");
  const [pollType, setPollType] = useState("Polls");
  const [pollCount, setPollCount] = useState();
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      // get user data
      const userData = await API.graphql(
        graphqlOperation(getUserInformation, { usernameID: username })
      );
      console.log(userData.data.getUserInformation);
      setUser(userData.data.getUserInformation);
      setLikedPolls(userData.data.getUserInformation.likedPolls.items);
      setAnsweredPolls(userData.data.getUserInformation.pollAnswers.items);
      // get polls created by user
      const pollsData = await API.graphql(
        graphqlOperation(pollByUser, { userID: username })
      );

      console.log(pollsData);

      const pollList = pollsData.data.pollByUser.items;
      console.log(pollList);
      const pollSize = pollList.length;
      setPollCount(pollSize);
      for (let i = 0; i < pollSize; i += 1) {
        pollList[i].likeLen = pollList[i].like.items.length;
      }
      setPolls(pollsData.data.pollByUser.items);

      // Get the amount of following the user has
      const followingData = await API.graphql(
        graphqlOperation(userFollowers, { followingID: username })
      );
      setFollowerCount(followingData.data.userFollowers.items.length);

      // Get the amount of followers the user has
      const followersData = await API.graphql(
        graphqlOperation(followersByUser, { followerID: username })
      );
      setFollowingCount(followersData.data.followersByUser.items.length);
    }
    async function fetchFollow() {
      try {
        const followData = await API.graphql(
          graphqlOperation(getFollow, {
            followingID: username,
            followerID: props.user.username,
          })
        );
        // console.log(followData);
        if (followData.data.getFollow) {
          setFollow("Following");
        }
      } catch (e) {
        console.log("Error fetching following data, ", e);
      }
    }
    fetchData();
    fetchFollow();
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

  const handleFollow = async (event) => {
    event.preventDefault();
    const followData = {
      followingID: username,
      followerID: props.user.username,
    };
    if (follow === "Follow") {
      try {
        const addFollow = await API.graphql(
          graphqlOperation(createFollow, { input: followData })
        );
        setFollow("Following");
        setFollowerCount(followerCount + 1);
      } catch (e) {
        console.log("Error following user, ", e);
      }
    } else {
      try {
        const removeFollow = await API.graphql(
          graphqlOperation(deleteFollow, { input: followData })
        );
        setFollow("Follow");
        setFollowerCount(followerCount - 1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleMessage = async () => {
    // const messageData = {
    //   name: username,
    //   members: [username, props.user.username]

    // };
    // try {
    //   const createConvo = await API.graphql(
    //     graphqlOperation(createConversation, {input: messageData})
    //   );
    //   console.log(messageData);
    //   console.log("wants to message");
    //   console.log(username);
    // }
    // catch(e){
    //   console.log(e);
    // }

    navigate("/messages", { state: { toUser: username } });
    // navigate(<Messages toUser = {username} fromUser={props.user.username}/>);
  };

  return (
    <div className="user">
      <div className="userProfile">
        <div className="user__profile">
          <div className="profile_header">
            <div className="p_header__left">{/* add profile image here */}</div>
            <div className="p_header__right">
              <div className="right_top">
                <h3 className="profile_username">{username} </h3>

                <div className="profile__header__buttons">
                  {props.user.username !== username && (
                    <>
                      <button onClick={handleMessage} className = "profile__msg">Message</button>
                      <button onClick={handleFollow} className = "profile__follow">{follow}</button>
                    </>
                  )}
                </div>
              </div>
              <div className="right_middle">
                <p>
                  <b>{pollCount}</b> posts
                </p>
                <p>
                  <b>{followerCount}</b> followers
                </p>
                <p>
                  <b>{followingCount}</b> following
                </p>
              </div>
              <div className="right_bottom"></div>
              <p>About Me</p>
            </div>
            <div className="user_info">
              {/* <p className="user_bday">Birthday: {formatDate(user?.bday)} </p>
            <p className="user_gender">Gender: {user?.sex}</p> */}
              <p className="date_joined">
                {" "}
                Joined: {formatDate(user?.createdAt)}
              </p>
            </div>
          </div>
          <div className="profile__body">
            <div className="body__top">
              <div className="profile_tabs">
                <p
                  className="tab__polls"
                  onClick={() => {
                    setPollType("Polls");
                  }}
                >
                  Polls
                </p>
                <p
                  className="tab__answered"
                  onClick={() => {
                    setPollType("Answered");
                  }}
                >
                  Answered
                </p>
                <p
                  className="tab__likes"
                  onClick={() => {
                    setPollType("Liked");
                  }}
                >
                  Liked
                </p>
              </div>
            </div>
            <div className="body__bottom">
              <div className="user__polls">
                {pollType === "Answered" &&
                  answeredPolls?.map((val, key) => {
                    return (
                      <div
                        className="user_poll_cards"
                        key={key}
                        onClick={() => goToPoll(val.Poll.id)}
                      >
                        <p className="user_poll_title">{val.Poll.title}</p>
                        <div className="user_poll_bottom">
                          <div className="user_poll_stats">
                            <p className="user_poll_likes">
                              {" "}
                              {val.Poll.like.items.length} likes{" "}
                              {val.Poll.views} views
                            </p>
                            <p className="user_poll_views"></p>
                          </div>
                          <p className="user_poll_created">
                            {formatDate(val.Poll.createdAt)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                {pollType === "Liked" &&
                  likedPolls?.map((val, key) => {
                    return (
                      <div
                        className="user_poll_cards"
                        key={key}
                        onClick={() => goToPoll(val.Poll.id)}
                      >
                        <p className="user_poll_title">{val.Poll.title}</p>
                        <div className="user_poll_bottom">
                          <div className="user_poll_stats">
                            <p className="user_poll_likes">
                              {" "}
                              {val.Poll.like.items.length} likes{" "}
                              {val.Poll.views} views
                            </p>
                            <p className="user_poll_views"></p>
                          </div>
                          <p className="user_poll_created">
                            {formatDate(val.Poll.createdAt)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                {pollType === "Polls" &&
                  polls?.map((val, key) => {
                    return (
                      <div
                        className="user_poll_cards"
                        key={key}
                        onClick={() => goToPoll(val.id)}
                      >
                        <p className="user_poll_title">{val.title}</p>
                        <div className="user_poll_bottom">
                          <div className="user_poll_stats">
                            <p className="user_poll_likes">
                              {" "}
                              {val.likeLen} likes {val.views} views
                            </p>
                            <p className="user_poll_views"></p>
                          </div>
                          <p className="user_poll_created">
                            {formatDate(val.createdAt)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* <template id="user_edits">
            <a className="editProfile">Edit Profile</a>
          </template>

          <template id="subscribe">
            <button className="user_subscribes" id="sub">
              Follow
            </button>
          </template> */}
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
