import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Poll } from "../../models";
import "./Search.css";

function Search(props) {
  const [searchList, setSearchList] = useState([]);
  const [poll, setPoll] = useState();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const models = await DataStore.query(Poll, (p) =>
        p.title("contains", query)
      );
      setSearchList(models);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

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
    <div className="Search">
      <h1 className="result_title">Search for {query}</h1>

      <div className="search__results">
        {searchList.map((val, key) => {
          return (
            <div className="poll_results" key={val.id}>
              <h3 className="poll_title" onClick={() => goToPoll(val.id)}>
                {val.title}
              </h3>
              <h4>Category: {val.category}</h4>
              <p
                className="created"
                onClick={() => goToUser(val.UserInformation.username)}
              >
                Created by: {val.UserInformation.username}
              </p>
              <p className="views">Views: {val.views}</p>
              <p className="likes">Likes: {val.likes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
