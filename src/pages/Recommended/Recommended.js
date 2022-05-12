import React, { useState, useEffect } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { listPolls } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

import "./Recommended.css";

function RecommendedPolls() {
  const [checked, setChecked] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input
          className="check__label"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        {label}
      </label>
    );
  };

  const fetchPoll = async () => {
    let searchArray = [];
    // poll search
    if (checked) {
      try {
        // poll search
        const models = await API.graphql(
          graphqlOperation(listPolls, {
            filter: { categories: { contains: "Color" } },
          })
        );
        searchArray.push(...models.data.listPolls.items);
        for (let i = 0; i < searchArray.length; i += 1) {
          searchArray[i].likeLen = searchArray[i].like.items.length;
        }
        setSearchList(searchArray);
        console.log(searchArray);
      } catch (e) {
        console.log("Error fetching polls, ", e);
      }
    }
    if (checkedTwo) {
      try {
        // poll search
        const models = await API.graphql(
          graphqlOperation(listPolls, {
            filter: { categories: { contains: "Sports" } },
          })
        );
        searchArray.push(...models.data.listPolls.items);
        for (let i = 0; i < searchArray.length; i += 1) {
          searchArray[i].likeLen = searchArray[i].like.items.length;
        }
        setSearchList(searchArray);
        console.log(searchArray);
      } catch (e) {
        console.log("Error fetching polls, ", e);
      }
    }
    if (!checked && !checkedTwo) {
      setSearchList([]);
    }
  };
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
    <div className="Recommended">
      <div className="recommended__options">
        <div>
          <h className="r_title">Select what you're interested in</h>
          <div className="recommended__checkbox">
            <div className="color__check">
              <Checkbox label="Color" value={checked} onChange={handleChange} />
            </div>
            <div className="sports__check">
              <Checkbox
                label="Sports"
                value={checkedTwo}
                onChange={handleChangeTwo}
              />
            </div>
            <button className="recommend__button" onClick={fetchPoll}>
              Recommend Poll
            </button>
          </div>

          <div></div>
        </div>
      </div>
      <div className="recommend__results">
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

export default RecommendedPolls;
