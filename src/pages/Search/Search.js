import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { searchPolls, searchUserInformations } from "../../graphql/queries";
import "./Search.css";

function Search(props) {
  const [searchList, setSearchList] = useState([]);
  const [followerCount, setFollowerCount] = useState();
  const [following, setFollowing] = useState("Follow");
  const [userSearch, setUserSearch] = useState({});
  // const [likeCount, setLikeCount] = useState();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let searchArray = [];
      // poll search
      try {
        // user search
        const userModel = await API.graphql(
          graphqlOperation(searchUserInformations, {
            filter: { usernameID: { match: query } },
          })
        );
        // set follower count for user
        if (userModel.data.searchUserInformations.items.length > 0) {
          const userData = userModel.data.searchUserInformations.items[0];
          userData.followerCount = userData.followers.items.length;
          userData.pollCount = userData.polls.items.length;
          // add user polls to array
          searchArray.push(...userData?.polls.items);
          setUserSearch(userData);
          // check if user follows searched user
          console.log(userData.followers.items);
          const followers = userData.followers.items;
          // ** need to check if logged in user is following searched user
        }
        // poll search
        const models = await API.graphql(
          graphqlOperation(searchPolls, { filter: { title: { match: query } } })
        );
        searchArray.push(...models.data.searchPolls.items);
        for (let i = 0; i < searchArray.length; i += 1) {
          searchArray[i].likeLen = searchArray[i].like.items.length;
        }
        setSearchList(searchArray);
      } catch (e) {
        console.log("Error fetching polls, ", e);
      }
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

  const handleFollow = () => {
    // const newFollow = await
  };

  return (
    <div className="Search">
      <h1 className="result__query">Search results for "{query}"</h1>
      <div className="user__results">
        {userSearch ? (
          <div className="search__user">
            <p className="search__username">{userSearch.usernameID}</p>
            <p className="search__pollCount">{userSearch.pollCount}</p>
            <p className="search__followers">{userSearch.followerCount}</p>
            <button className="search__followUser" onClick={handleFollow}>
              {following}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="search__results">
        {searchList.map((val, key) => {
          return (
            <div className="poll__results">
              <h3
                className="result__title"
                onClick={() => goToPoll(val.id)}
                key={key}
              >
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
