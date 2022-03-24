import React, { useState, useEffect } from "react";
import "./Test.css";
import { DataStore } from "@aws-amplify/datastore";
import { Poll, Sex, UserInformation } from "../../models";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { ConsoleLogger } from "@aws-amplify/core";

function Test(props) {
  const [searchList, setSearchList] = useState([]);
  const [choices, setChoices] = useState([]);
  const [poll, setPoll] = useState([]);

  // get userinformation data and store into user object
  useEffect(async () => {
    const model = await DataStore.query(Poll, (p) =>
      p.id("eq", "942c8a6e-1cd1-4077-aa5b-6eb0d4f3dd77")
    );
    setPoll(model);
  }, []);

  return (
    <div className="Test">
      <h1>Hello from test page!</h1>
      <h3>{props.username}</h3>
      {poll.map((val, key) => {
        return (
          <div className="poll_results" key={key}>
            <h3>{val.title}</h3>
            <p>{val.id}</p>
            <p>{val.answerChoices}</p>
            <p>{val.views}</p>
            <p className="created">Created by: {props.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
