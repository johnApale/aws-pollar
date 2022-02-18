import React, { useState } from "react";
import "./Test.css";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../../models";

function Test(props) {
  const [searchList, setSearchList] = useState([]);
  const saveTest = async () => {
    try {
      await DataStore.save(
        new Blog({
          name: "Blog Post for Colin to see",
          posts: [],
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  };

  const queryData = async () => {
    const models = await DataStore.query(Blog);
    setSearchList(models);
  };

  const user = props.user;
  return (
    <div className="Test">
      <h1>Hello from test page,{" " + user.username}!</h1>
      <button className="save__button" onClick={saveTest}>
        Save
      </button>
      <button className="query_button" onClick={queryData}>
        Query
      </button>
      {searchList.map((val, key) => {
        return (
          <div className="poll_results">
            <h3>{val.name}</h3>
            <p className="created">Created by: {val.createdAt}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
