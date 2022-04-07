import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { DataStore, API } from "aws-amplify";
import { getUserPolls } from "../../graphql/queries";
import { Poll } from "../../models";
import "./ViewPoll.css";

function ViewPoll() {
  const [poll, setPoll] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const model = await DataStore.query(Poll, (p) => p.id("eq", id));
      setPoll(model);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function goToAnswer() {
    navigate({
      pathname: "/poll/answer",
      search: `?${createSearchParams({ id: id })}`,
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
      {poll.map((val, key) => {
        return (
          <div className="poll__details">
            <div className="poll__top">
              <p
                className="poll__username"
                onClick={() => goToUser(val.UserInformation.username)}
              >
                {val.UserInformation.username}
              </p>
              <p className="poll__created">{formatDate(val.createdAt)}</p>
            </div>
            <h3 className="poll__title">{val.title}</h3>
            <p className="poll__description">{val.description}</p>

            <p className="poll__categories">
              {val.categories.length > 0 && (
                <p> Categories: {val.categories}</p>
              )}
            </p>
            <div className="poll__bottom">
              <p className="poll__likes">Likes: {val.likes}</p>
              <p className="poll__views">Views: {val.views}</p>
            </div>
            <button className="answer__button" onClick={goToAnswer}>
              Answer Poll
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ViewPoll;