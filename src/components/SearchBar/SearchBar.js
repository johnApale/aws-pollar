import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch({ query: event.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      goToResults();
    }
  };

  const goToResults = () => {
    if (!search) {
      navigate("/");
    } else {
      navigate({
        pathname: "/results",
        search: `?${createSearchParams(search)}`,
        replace: true,
      });
    }
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
        />
        <div className="searchButton">
          <img
            src={process.env.PUBLIC_URL + "/search-icon.png"}
            className="searchIcon"
            onClick={goToResults}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
