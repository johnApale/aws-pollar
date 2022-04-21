import React, { useState, useEffect } from "react";
import "./Home.css";
import UserDetails from "../UserDetails/UserDetails";
import { API, graphqlOperation } from "aws-amplify";
import { getUserInformation, trendingPolls } from "../../graphql/queries";
import FeedPost from "../../components/FeedPost/FeedPost";

function Home(props) {
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [pollList, setPollList] = useState();
  const [placeholder, setPlaceholder] = useState("Ask a question");

  useEffect(() => {
    console.log(props.user);
    async function fetchData() {
      try {
        const userInfoArray = await API.graphql(
          graphqlOperation(getUserInformation, {
            usernameID: props.user.username,
          })
        );

        const userInfo = userInfoArray.data.getUserInformation;
        setPlaceholder(`Ask a question, ${userInfo.firstName}`);
        if (!userInfo) {
          setPopupTrigger(true);
        }
      } catch (error) {
        console.log("Error fetching user information, ", error);
      }
    }

    async function fetchPolls() {
      const pollModel = await API.graphql(
        graphqlOperation(trendingPolls, { filter: { publicity: { eq: true } } })
      );
      const polls = pollModel.data.listPolls.items;
      for (let i = 0; i < polls.length; i++) {
        polls[i].time = formatDate(polls[i].createdAt);
      }
      setPollList(pollModel.data.listPolls.items);
      console.log(polls);
    }

    fetchData();
    fetchPolls();
  }, [props.user.username]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const updatedDate = date.toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const updatedTime = date.toLocaleTimeString("en-US", {
      timezone: "America/Los_Angeles",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      seconds: "numeric",
    });

    const time = updatedDate + " at " + updatedTime;
    return time;
  };

  return (
    <div className="Home">
      <div className="home__feed">
        <div className="home__post">
          <div className="post__left"></div>
          <input
            type="text"
            className="post__input"
            placeholder={placeholder}
          />
        </div>
        <div className="home__cards">
          {pollList
            ?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((val, key) => {
              return <FeedPost val={val} key={key} user={props.user} />;
            })}
          {!pollList && (
            <div className="home__nothing">Nothing to show on feed</div>
          )}
        </div>
      </div>
      <UserDetails trigger={popupTrigger} user={props.user}></UserDetails>
    </div>
  );
}

export default Home;
