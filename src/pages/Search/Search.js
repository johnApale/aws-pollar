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
  // const [likeCount, setLikeCount] = useState();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const models = await API.graphql(
          graphqlOperation(searchPolls, { filter: { title: { match: query } } })
        );
        const search = models.data.searchPolls.items;
        for (let i = 0; i < search.length; i += 1) {
          search[i].likeLen = search[0].likes.items.length;
        }
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
      <h1 className="result__query">Search results for "{query}"</h1>

      <div className="search__results">
        {searchList.map((val, key) => {
          return (
            <div className="poll__results">
              <h3 className="result__title" onClick={() => goToPoll(val.id)}>
                {val.title}
              </h3>
              <p className="result__categories">Category: {val.categories}</p>
              <div className="result__bottom">
                <div className="result__left">
                  <p className="result__likes">Likes: {val.likeLen}</p>
                  <p className="result__views">Views: {val.views}</p>
                </div>

                <p
                  className="result__created"
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

export default Search;
