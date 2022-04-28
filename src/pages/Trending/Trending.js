import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { trendingPolls } from "../../graphql/queries";

import "./Trending.css";

function Trending() {
  const [pollList, setPollList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const pollModel = await API.graphql(
        graphqlOperation(trendingPolls, { filter: { publicity: { eq: true } } })
      );
      setPollList(pollModel.data.listPolls.items);
    }
    fetchData();
  }, []);

  function goToPoll(pollID) {
    navigate({
      pathname: "/poll/view",
      search: `?${createSearchParams({ id: pollID })}`,
      replace: true,
    });
  }

  function goToUser(username) {
    navigate(`/profile/${username}`);
  }

  return (
    <div className="Trending">
      <h1 className="trending__page-title">Trending Page </h1>
      <div className="trending__polls">
        {pollList
          ?.sort(
            (a, b) =>
              a.views + b.views ||
              a.userAnswers.items.length + b.userAnswers.items.length ||
              a.like.items.length + b.like.items.length
          )
          .map((val, key) => {
            return (
              <div className="trending__results">
                <h3
                  className="trending__title"
                  onClick={() => goToPoll(val.id)}
                  key={key}
                >
                  {val.title}
                </h3>
                <p className="trending__categories">
                  Category: {val.categories}
                </p>
                <div className="trending__bottom">
                  <div className="trending__left">
                    <p className="trending__likes">
                      Likes: {val.like.items.length}
                    </p>
                    <p className="trending__views">Views: {val.views}</p>
                  </div>

                  <p
                    className="trending__created"
                    onClick={() => goToUser(val.userID)}
                  >
                    Created by: {val.userID}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Trending;
