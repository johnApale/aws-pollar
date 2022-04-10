import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { searchPolls } from "../../graphql/queries";
import "./Search.css";

// Still need to figure out like counter

function Search(props) {
  const [searchList, setSearchList] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const models = await API.graphql(
          graphqlOperation(searchPolls, { filter: { title: { match: query } } })
        );
        console.log(models.data.searchPolls.items);
        setSearchList(models.data.searchPolls.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
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
            <div className="poll_results">
              <h3 className="poll_title" onClick={() => goToPoll(val.id)}>
                {val.title}
              </h3>
              <h4>Category: {val.categories}</h4>
              <p className="created" onClick={() => goToUser(val.userID)}>
                Created by: {val.userID}
              </p>
              <p className="views">Views: {val.views}</p>
              {/* <p className="likes">Likes: {val.likes.items.length}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
