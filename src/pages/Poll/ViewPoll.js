import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getPoll } from "../../graphql/queries";
import "./ViewPoll.css";

function ViewPoll() {
  const [poll, setPoll] = useState([]);
  const [searchParams] = useSearchParams();
  const queryID = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const pollData = await API.graphql(
          graphqlOperation(getPoll, { id: queryID })
        );
        const newPoll = pollData.data.getPoll;
        newPoll.categoryLength = newPoll.categories.length;
        newPoll.likeCount = newPoll.likes.items.length;
        setPoll(newPoll);
        console.log(newPoll);
        console.log(newPoll.categoryLength);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [queryID]);

  function goToAnswer() {
    navigate({
      pathname: "/poll/answer",
      search: `?${createSearchParams({ id: queryID })}`,
      replace: true,
    });
  }

  function goToUser(username) {
    navigate(`/profile/${username}`);
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

  return (
    <div className="view__poll">
      <div className="poll__details">
        <div className="poll__top">
          <p className="poll__username" onClick={() => goToUser(poll.userID)}>
            {poll.userID}
          </p>
          <p className="poll__created">{formatDate(poll.createdAt)}</p>
        </div>
        <h3 className="poll__title">{poll.title}</h3>
        <p className="poll__description">{poll.description}</p>

        <p className="poll__categories">
          {poll.categoryLength > 0 && <p> Categories: {poll.categories}</p>}
        </p>
        <div className="poll__bottom">
          <p className="poll__likes">Likes: {poll.likeCount}</p>
          <p className="poll__views">Views: {poll.views}</p>
        </div>
        <button className="answer__button" onClick={goToAnswer}>
          Answer Poll
        </button>
      </div>
    </div>
  );
}

export default ViewPoll;
