import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBar.css";
// import Home from "../../pages/Home/Home";
// import Poll from "../../pages/Poll/Poll";
import Search from "../../pages/Search/Search";

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="searchButton">
          <Link to={{ pathname: "/search_results/" + search }}>
            <img
              src={process.env.PUBLIC_URL + "/search-icon.png"}
              className="searchIcon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
