import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Poll, UserInformation, Comment } from "../../models";

function CommentTest(props) {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [poll, setPoll] = useState([]);
  const [pollData, setPollData] = useState([]);

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

    setPollData(
      await DataStore.query(Poll, (p) =>
        p.id("eq", "942c8a6e-1cd1-4077-aa5b-6eb0d4f3dd77")
      )
    );
    pollData.map((val, key) => {
      setPoll({
        userInformationID: val.UserInformation.id,
        title: val.title,
        UserInformation: val.UserInformation,
        publicity: val.publicity,
        disclaimer: val.disclaimer,
        description: val.description,
        answerChoices: val.answerChoices,
        categories: val.categories,
        tags: val.tags,
        likes: val.likes,
        views: val.views,
        timeStart: val.timeStart,
        timeEnd: val.timeEnd,
        comments: [],
      });
    });

    // return () => {
    //   setUser([]);
    // };
  });

  const saveTest = async () => {
    try {
      await DataStore.save(
        new Comment({
          userInformationID: user.id,
          pollID: poll.id,
          UserInformation: user,
          Poll: poll,
          content: "Lorem ipsum dolor sit amet",
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error in saving ", error);
    }
  };

  return (
    <div className="CommentTest">
      <button onClick={saveTest}>Save Comment</button>
    </div>
  );
}

export default CommentTest;