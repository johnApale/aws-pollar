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
      refreshPage();
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="Searchbar">
      <div className="search__input">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default SearchBar;
