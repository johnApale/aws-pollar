import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
import Axios from "axios";

function Search() {
  let { query } = useParams();

  const [searchList, setSearchList] = useState([]);

  return (
    <div className="Search">
      <h1>Search for {query} </h1>

      <div className="search__results">
        {searchList.map((val, key) => {
          return (
            <div className="poll_results">
              <h3>{val.title}</h3>
              <h4>Category: {val.category}</h4>
              <p className="created">Created by: {val.username}</p>
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
