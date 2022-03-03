import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Poll } from "../../models";
import "./Search.css";

function Search(props) {
  const [searchList, setSearchList] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(async () => {
    try {
      const models = await DataStore.query(Poll, (p) =>
        p.title("contains", query)
      );
      setSearchList(models);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="Search">
      <h1>Search for {query}</h1>

      <div className="search__results">
        {searchList.map((val, key) => {
          return (
            <div className="poll_results" key={val.id}>
              <h3>{val.title}</h3>
              <h4>Category: {val.category}</h4>
              <p className="created">
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
