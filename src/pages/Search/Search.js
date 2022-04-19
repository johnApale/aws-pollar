import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import {
  searchPolls,
  searchUserInformations,
  userFollowers,
} from "../../graphql/queries";
import "./Search.css";

function Search(props) {
  const [searchList, setSearchList] = useState([]);
  const [followerCount, setFollowerCount] = useState();
  const [following, setFollowing] = useState("Follow");
  const [userSearch, setUserSearch] = useState({});
  const [userFound, setUserFound] = useState(false);
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
        console.log(userModel.data.searchUserInformations.items);
        if (userModel.data.searchUserInformations.items.length > 0) {
          const userData = userModel.data.searchUserInformations.items[0];
          userData.pollCount = userData.polls.items.length;
          searchArray.push(...userData?.polls.items);
          setUserSearch(userData);
          setUserFound(true);
          console.log(userFound);
          fetchFollow();
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

    async function fetchFollow() {
      console.log("TEST");
      // check if the logged in user follows the user fetched
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

      {userFound ? (
        <div className="user__results">
          <div className="search__user">
            <div className="user__left">{/* PUT IMAGE HERE */}</div>
            <div className="user__center">
              <p
                className="search__username"
                onClick={() => goToUser(userSearch.username)}
              >
                {userSearch.usernameID}
              </p>
              <p className="search__pollCount">{userSearch.pollCount} polls</p>
              <p className="search__followers">
                {userSearch.followerCount} 0 followers
              </p>
            </div>
            <div className="user__right">
              <button className="search__followUser" onClick={handleFollow}>
                {following}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

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
