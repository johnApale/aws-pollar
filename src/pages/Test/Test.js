import React, { useState, useEffect } from "react";
import "./Test.css";
import { DataStore } from "@aws-amplify/datastore";
import { Poll, Sex, UserInformation } from "../../models";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

function Test(props) {
  const [searchList, setSearchList] = useState([]);
  const [choices, setChoices] = useState([]);
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState([]);

  // get userinformation data and store into user object
  useEffect(async () => {
    setUserData(
      await DataStore.query(UserInformation, (u) =>
        u.username("eq", props.user.username)
      )
    );
    userData.map((val, key) => {
      setUser({
        id: val.id,
        username: val.username,
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        bday: val.bday,
        anon: val.anon,
        sex: val.sex,
      });
    });
  });

  const saveTest = async () => {
    try {
      await DataStore.save(
        new Poll({
          userInformationID: user.id,
          title: "This is a test poll2?",
          UserInformation: user,
          publicity: true,
          disclaimer: true,
          description: "Lorem ipsum dolor sit amet",
          answerChoices: ["Choice1", "Choice2"],
          categories: [],
          tags: [],
          likes: 1020,
          views: 1020,
          timeStart: "1970-01-01T12:30:23.999Z",
          timeEnd: "1970-01-01T12:30:23.999Z",
          comments: [],
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error in saving ", error);
    }
  };

  const queryData = async () => {
    const models = await DataStore.query(Poll, (p) =>
      p.title("contains", "Favorite")
    );
    console.log(searchList);
    setSearchList(models);
  };

  return (
    <div className="Test">
      <h1>Hello from test page,{" " + user.firstName}!</h1>
      <button className="save__button" onClick={saveTest}>
        Save
      </button>
      <button className="query_button" onClick={queryData}>
        Query
      </button>
      <h3>{user.id}</h3>
      {searchList.map((val, key) => {
        return (
          <div className="poll_results" key={key}>
            <h3>{val.title}</h3>
            <p>{val.id}</p>
            <p>{val.answerChoices}</p>
            <p>{val.views}</p>
            <p className="created">Created by: {user.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
